# Build prompt — Eloryo - Reya LP

The intended scope for this project, elaborated from the original idea. Use it as the source of truth for what to build.

---

# Developer Build Prompt: Eloryo - Reya Landing Page

You are tasked with building a high-end, high-converting luxury real estate landing page for **Reya**, a premium residential development by **Eloryo**. This project is commissioned by agency **OTW**. 

The build should leverage a **Marketing Site** starter stack (React, Next.js App Router, Tailwind CSS, and Framer Motion for premium, fluid interactions).

---

## 1. Project Overview & Target Audience
* **Project Name:** Eloryo - Reya LP (Landing Page)
* **Objective:** Introduce "Reya"—a new ultra-luxury, architecturally significant residential development—and capture high-quality leads (HNWIs, luxury homebuyers, and premium investors) through a bespoke, high-end digital experience.
* **Target Audience:** High-net-worth individuals, design-conscious buyers, and real estate investors seeking exclusivity, architectural excellence, and curated wellness amenities.
* **Tone & Voice:** Editorial, sophisticated, understated, and highly exclusive. The copy should feel like a high-end architectural publication rather than a loud sales pitch.

---

## 2. Design & Aesthetic Direction
* **Layout:** Generous whitespace, editorial grids, asymmetrical column layouts, and large, cinematic image containers. Avoid standard, blocky bootstrap-style sections.
* **Color Palette (Sophisticated & Earthy):**
  * Primary/Background: Travertine Warm White (`#F9F6F0`) or Deep Alabaster (`#FAF9F6`)
  * Accent/Dark: Charcoal/Ebonized Oak (`#1A1A1A` or `#121212`)
  * Secondary Accent: Muted Champagne/Bronze (`#C5A880`)
* **Typography:**
  * Headings: Elegant, high-contrast Serif (e.g., Playfair Display, Cormorant Garamond, or system serif alternatives) to convey heritage and luxury.
  * Body: Clean, highly readable Sans-serif (e.g., Inter, Plus Jakarta Sans, or system sans-serif alternatives) set with generous line-height.
* **Motion & Interactions:**
  * Silky-smooth scroll-triggered fades and reveals using `framer-motion`.
  * Parallax image effects on scroll.
  * Micro-interactions on buttons, form fields, and navigation links (e.g., elegant underline draws, subtle scale-ups).

---

## 3. Page Structure & Components

The landing page must be built as a single-page, deep-scrolling experience with the following structural sections:

### A. Navigation Bar (Floating/Sticky)
* **Layout:** Transparent background shifting to a frosted glass blur (`backdrop-blur-md`) on scroll.
* **Elements:**
  * Left: **Eloryo | Reya** wordmark logo.
  * Center: Minimal anchor links (The Vision, Residences, Amenities, Location).
  * Right: "Inquire Now" high-contrast CTA button.
* **Mobile Behavior:** Collapses into a minimal hamburger menu with a full-screen elegant overlay.

### B. Hero Section (The First Impression)
* **Visuals:** Full-screen or 90vh container. It should support a background video placeholder or a high-resolution, Ken-Burns-effect image showcasing the building's exterior architecture.
* **Content:**
  * Subtle eyebrow text: "Now Accepting Private Registrations"
  * Main Headline: "Reya: Sculpted by Light. Defined by Nature."
  * Subheadline: "An exclusive collection of 12 architectural residences nestled on the pristine coastline."
  * Call to Action: Primary button "Schedule Private Tour" (scrolls to form) and secondary "Watch Architectural Film" (opens an elegant video modal).

### C. The Vision (Philosophical Narrative)
* **Layout:** Two-column split. Left side features a compelling editorial paragraph in a larger font size. Right side features an overlapping offset gallery of two images (architectural details, raw luxury materials like marble and brass).
* **Copy Themes:** Craftsmanship, curated materiality, environmental harmony, and the vision of Eloryo's lead architect.

### D. Interactive Residences Showcase (The Units)
* **Feature:** A tabs-based or carousel-based interactive component showcasing the different residence styles (e.g., "The Garden Duplex", "The Panoramic Penthouse", "The Signature Residence").
* **Each Residence Slide/Tab contains:**
  * High-end interior rendering placeholder (living room, master bath, or kitchen).
  * Spec summary grid: Sq. Ft., Bedrooms, Bathrooms, Exposure.
  * Dynamic "View Floorplan" trigger (opens a lightbox containing a placeholder vector floorplan).
  * Inline context-specific CTA: "Request Pricing for Penthouse".

### E. Curated Amenities (The Lifestyle)
* **Layout:** A clean, modern grid (3x2 or alternating rows) with large, hover-revealed imagery.
* **Amenities to Highlight:**
  * *The Wellness Pavilion:* Infinity pool, private spa, and cold plunge.
  * *The Rooftop Observatory:* Sunset lounge and outdoor kitchen.
  * *White-Glove Services:* 24/7 concierge, private wine cellar, and secure subterranean parking.
* **Interaction:** Hovering over an amenity cards smoothly zooms the background image and reveals a brief description.

### F. Location & Neighborhood (The Context)
* **Visual:** A styled map component. Use a custom monochromatic map placeholder styled to match the site's design palette.
* **Content:**
  * Elegant list of curated nearby spots (e.g., Fine Dining, Yacht Harbor, Private Beach Access, Cultural District).
  * Hovering over a nearby spot highlights its marker on the custom map.

### G. The Inquiry Suite (High-Touch Lead Capture)
* **Importance:** This is the primary conversion element. It must look and feel like an elite, private registration form, not a generic contact form.
* **Fields:**
  * Full Name (floating label)
  * Email Address
  * Phone Number
  * Desired Residence Type (Select dropdown: Penthouse, Signature, Garden Duplex, Undecided)
  * Buying Timeline (Select dropdown: Immediate, 3-6 Months, 6-12 Months, Just Exploring)
  * Custom Message / Special Requests (Textarea)
* **States:** Include robust client-side validation, elegant loading state (spinner/disabled state), and a beautifully styled overlay success screen ("An Eloryo Private Advisor will contact you within 2 hours to coordinate your private viewing.")

### H. Footer
* **Layout:** Clean, multi-column dark charcoal background.
* **Content:**
  * Eloryo branding, agency credits (OTW).
  * Legal disclaimers (equal housing opportunity, artist rendering disclaimers).
  * Social links (Instagram, LinkedIn, YouTube).
  * Newsletter subscription signup (minimalist input field + arrow button).

---

## 4. Technical Constraints & Stack
* **Framework:** Next.js (App Router, React 18+).
* **Styling:** Tailwind CSS. Utilize Tailwind configuration to set custom font families (Serif and Sans), custom brand colors (travertine, ebonized oak, champagne), and customized fluid transitions.
* **Animations:** Framer Motion. Use `AnimatePresence` for modal state changes and `whileInView` for elegant scroll-reveals.
* **Icons:** Lucide-react (sleek, lightweight outline icons).
* **Responsiveness:** Perfect scaling from 320px up to 2560px. Mobile layouts must maintain the high-end editorial feel without looking crowded.
* **Performance:** Ensure optimized image loading (`next/image`) with proper aspect ratios to prevent Layout Shift (CLS).

---

## 5. Acceptance Criteria
1. **Premium Aesthetic:** The final site must look like a high-end agency creation. No default, raw Tailwind layouts; use custom spacing, elegant typography, and refined hover states.
2. **Interactive State Management:**
   * Residence tabs must switch instantly without layout shifts.
   * Lightbox modals for Floorplans and the Architectural Film must open smoothly with overlay fades and scale transitions.
   * Sticky navigation header must change appearance seamlessly when scrolling past 50px.
3. **Form Functionality:**
   * The inquiry form must fully validate user input before submission.
   * Clicking "Submit" must transition to a loading state and then to a luxurious, high-touch success message.
4. **Clean Code & Structure:**
   * Highly modular React components (`Hero.tsx`, `Residences.tsx`, `InquiryForm.tsx`, `InteractiveMap.tsx`, `Footer.tsx`).
   * Semantic HTML structure (`<header>`, `<main>`, `<section>`, `<footer>`).
   * Clean Tailwind class structures, making good use of utility classes and custom config adjustments where necessary.
