#!/usr/bin/env python3
"""Convert referenced PNG/JPG images under public/ to WebP and update the code.

    npm run optimize        (or: python scripts/optimize-images.py)

Next.js re-encodes and resizes images at request time, but it can only work from
what we ship. Source photography arrives as PNG, which is roughly 10x heavier
than it needs to be for photographic content, so converting once at rest keeps
the repo and the deploy small.

Images are referenced from TypeScript as absolute public paths
("/uploads/x.webp"), so this rewrites those string literals in lib/ and
components/ after converting the files.

Only the .webp output is committed; PNG/JPG sources are gitignored. The script
is idempotent -- paths already pointing at .webp are left alone.
"""

import os
import re
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")

# Photographic content. High enough to keep gradients clean on a full-bleed hero.
QUALITY = 82
# Below this, images are usually logos/patterns with hard edges, where lossless
# often wins outright. We try both and keep whichever is smaller.
SMALL_FILE_BYTES = 400 * 1024

REF = re.compile(r"/(?:uploads|assets)/[^\"'()]+?\.(?:png|jpg|jpeg)", re.IGNORECASE)


def source_files():
    """Every file that may contain an image path literal."""
    out = []
    for folder in ("lib", "components", "app"):
        base = os.path.join(ROOT, folder)
        for dirpath, _, names in os.walk(base):
            for n in names:
                if n.endswith((".ts", ".tsx", ".css")):
                    out.append(os.path.join(dirpath, n))
    return out


def encode(src, dest):
    """Write the smallest sane WebP for src. Returns bytes written."""
    with Image.open(src) as im:
        # Drop a fully-opaque alpha channel; it costs size and buys nothing.
        if im.mode == "RGBA" and im.getchannel("A").getextrema() == (255, 255):
            im = im.convert("RGB")

        candidates = [{"quality": QUALITY, "method": 6}]
        if os.path.getsize(src) < SMALL_FILE_BYTES:
            candidates.append({"lossless": True, "method": 6})

        best = None
        for index, opts in enumerate(candidates):
            tmp = f"{dest}.{index}.tmp"
            im.save(tmp, "WEBP", **opts)
            size = os.path.getsize(tmp)
            if best is None or size < best[0]:
                if best is not None:
                    os.remove(best[1])
                best = (size, tmp)
            else:
                os.remove(tmp)

    os.replace(best[1], dest)
    return best[0]


def main():
    files = {p: open(p, encoding="utf-8").read() for p in source_files()}

    # Collect every referenced raster path, in first-seen order.
    refs = []
    for text in files.values():
        for m in REF.findall(text):
            if m not in refs:
                refs.append(m)

    if not refs:
        print("No PNG/JPG references left - already optimized.")
        return 0

    before = after = converted = 0
    replacements = {}

    for ref in refs:
        src = os.path.join(PUBLIC, ref.lstrip("/"))
        if not os.path.exists(src):
            print(f"  !! referenced but missing, skipped: {ref}")
            continue

        dest_ref = os.path.splitext(ref)[0] + ".webp"
        dest = os.path.join(PUBLIC, dest_ref.lstrip("/"))

        src_size = os.path.getsize(src)
        # Reuse an existing .webp unless the source is newer.
        if os.path.exists(dest) and os.path.getmtime(dest) >= os.path.getmtime(src):
            dest_size = os.path.getsize(dest)
        else:
            dest_size = encode(src, dest)
            converted += 1

        before += src_size
        after += dest_size
        replacements[ref] = dest_ref
        print(f"  {src_size / 1048576:6.2f}MB -> {dest_size / 1048576:5.2f}MB  {dest_ref}")

    for path, text in files.items():
        updated = text
        for a, b in replacements.items():
            updated = updated.replace(a, b)
        if updated != text:
            with open(path, "w", encoding="utf-8", newline="\n") as fh:
                fh.write(updated)
            print(f"  updated {os.path.relpath(path, ROOT)}")

    if not before:
        return 0

    saved = before - after
    print(
        f"\n{len(replacements)} images ({converted} newly encoded): "
        f"{before / 1048576:.1f}MB -> {after / 1048576:.1f}MB "
        f"(saved {saved / 1048576:.1f}MB, {saved / before * 100:.0f}%)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
