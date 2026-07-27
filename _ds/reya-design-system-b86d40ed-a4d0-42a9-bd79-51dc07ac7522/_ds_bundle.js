/* @ds-bundle: {"format":4,"namespace":"ReyaDesignSystem_b86d40","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5152fd8e5416","components/core/Button.jsx":"293d50333d1c","components/core/Card.jsx":"898b94e09dc8","components/feedback/Accordion.jsx":"363855903dec","components/forms/Input.jsx":"5cecb84e20c0","components/navigation/Footer.jsx":"d0ccbf799be0","components/navigation/NavBar.jsx":"327001757907"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ReyaDesignSystem_b86d40 = window.ReyaDesignSystem_b86d40 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const toneStyles = {
  clay: {
    background: 'oklch(from var(--reya-soft-clay) l c h / 0.14)',
    color: 'var(--reya-soft-clay)'
  },
  teal: {
    background: 'oklch(from var(--reya-dusk-teal) l c h / 0.14)',
    color: 'var(--reya-dusk-teal)'
  },
  olive: {
    background: 'oklch(from var(--reya-olive-grove) l c h / 0.16)',
    color: 'oklch(from var(--reya-olive-grove) calc(l - 0.18) c h)'
  },
  neutral: {
    background: 'oklch(from var(--reya-earth-brown) l c h / 0.08)',
    color: 'var(--color-text-secondary)'
  }
};
function Badge(props) {
  const {
    children = 'Label',
    tone = 'clay',
    style,
    ...rest
  } = props;
  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      padding: '6px 12px',
      borderRadius: 'var(--radius)',
      ...toneStyles[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '8px 18px',
    fontSize: 'var(--text-body-sm)'
  },
  md: {
    padding: '13px 28px',
    fontSize: 'var(--text-body)'
  },
  lg: {
    padding: '17px 36px',
    fontSize: 'var(--text-body-lg)'
  }
};
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--weight-medium)',
  borderRadius: 'var(--radius)',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  lineHeight: 1,
  transition: 'background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)',
  whiteSpace: 'nowrap'
};
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: 'var(--color-border)',
      color: 'var(--color-text-muted)',
      borderColor: 'transparent'
    };
  }
  switch (variant) {
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--color-text-primary)',
        borderColor: 'var(--color-border-strong)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--color-accent-secondary)',
        borderColor: 'transparent'
      };
    case 'dark':
      return {
        background: 'var(--color-text-primary)',
        color: 'var(--color-text-on-dark)',
        borderColor: 'var(--color-text-primary)'
      };
    case 'primary':
    default:
      return {
        background: 'var(--color-accent-primary)',
        color: 'var(--color-text-on-accent)',
        borderColor: 'var(--color-accent-primary)'
      };
  }
}
function Button(props) {
  const {
    children = 'Button',
    variant = 'primary',
    size = 'md',
    disabled = false,
    icon = null,
    iconPosition = 'left',
    onClick,
    style,
    ...rest
  } = props;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const vStyle = variantStyle(variant, disabled);
  let hoverBg = vStyle.background;
  if (!disabled && hover) {
    if (variant === 'primary' || variant === undefined) hoverBg = 'var(--color-accent-primary-hover)';else if (variant === 'secondary') hoverBg = 'oklch(from var(--reya-earth-brown) l c h / 0.06)';else if (variant === 'ghost') hoverBg = 'oklch(from var(--reya-dusk-teal) l c h / 0.08)';else if (variant === 'dark') hoverBg = 'oklch(from var(--reya-earth-brown) calc(l + 0.08) c h)';
  }
  if (!disabled && active) {
    if (variant === 'primary' || variant === undefined) hoverBg = 'var(--color-accent-primary-active)';
  }
  return React.createElement('button', {
    ...rest,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...sizeStyles[size],
      ...vStyle,
      background: hoverBg,
      transform: !disabled && active ? 'scale(0.98)' : 'scale(1)',
      opacity: disabled ? 0.7 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card(props) {
  const {
    image,
    eyebrow,
    title = 'Card title',
    description = '',
    footer,
    variant = 'elevated',
    style,
    children,
    ...rest
  } = props;
  const surfaceStyle = variant === 'outlined' ? {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    boxShadow: 'none'
  } : variant === 'sunken' ? {
    background: 'var(--color-surface-sunken)',
    border: '1px solid transparent',
    boxShadow: 'none'
  } : {
    background: 'var(--color-surface)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-md)'
  };
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      ...surfaceStyle,
      ...style
    }
  }, image ? React.createElement('div', {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'var(--color-bg-alt)'
    }
  }, React.createElement('img', {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })) : null, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '24px'
    }
  }, eyebrow ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--color-accent-primary)'
    }
  }, eyebrow) : null, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-h5)',
      color: 'var(--color-text-primary)',
      margin: 0,
      lineHeight: 'var(--leading-snug)'
    }
  }, title), description ? React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-text-secondary)',
      margin: 0,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, description) : null, children || null, footer ? React.createElement('div', {
    style: {
      marginTop: '8px'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function Accordion(props) {
  const {
    items = [],
    defaultOpenIndex = -1,
    style,
    ...rest
  } = props;
  const [openIndex, setOpenIndex] = React.useState(defaultOpenIndex);
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = openIndex === i;
    return React.createElement('div', {
      key: i,
      style: {
        borderBottom: '1px solid var(--color-border)'
      }
    }, React.createElement('button', {
      onClick: () => setOpenIndex(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '22px 4px',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-h5)',
        color: 'var(--color-text-primary)'
      }
    }, item.question, React.createElement('span', {
      style: {
        flexShrink: 0,
        width: '28px',
        height: '28px',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--color-border-strong)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: '18px',
        color: 'var(--color-accent-secondary)',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform var(--duration-normal) var(--ease-standard)'
      }
    }, '+')), React.createElement('div', {
      style: {
        maxHeight: isOpen ? '400px' : '0px',
        overflow: 'hidden',
        transition: 'max-height var(--duration-normal) var(--ease-standard)'
      }
    }, React.createElement('p', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
        color: 'var(--color-text-secondary)',
        lineHeight: 'var(--leading-relaxed)',
        margin: '0 4px 22px',
        maxWidth: '640px'
      }
    }, item.answer)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input(props) {
  const {
    label,
    placeholder = '',
    type = 'text',
    style,
    id,
    ...rest
  } = props;
  const [focused, setFocused] = React.useState(false);
  const inputId = id || 'input-' + Math.random().toString(36).slice(2, 8);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-text-primary)'
    }
  }, label) : null, React.createElement('input', {
    ...rest,
    id: inputId,
    type,
    placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-text-primary)',
      background: 'var(--color-surface)',
      border: '1px solid ' + (focused ? 'var(--color-accent-secondary)' : 'var(--color-border-strong)'),
      borderRadius: 'var(--radius)',
      padding: '13px 16px',
      outline: focused ? '3px solid var(--color-focus-ring)' : 'none',
      outlineOffset: '0px',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer(props) {
  const {
    logoSrc,
    brandName = 'REYA',
    tagline = 'Your Place in the Sun',
    columns = [{
      heading: 'Explore',
      links: ['Residences', 'Amenities', 'Gallery']
    }, {
      heading: 'Company',
      links: ['About', 'Contact', 'Careers']
    }],
    address = '3 Diagorou Street, Nicosia, 1097, Cyprus',
    style
  } = props;
  return React.createElement('footer', {
    style: {
      background: 'var(--color-text-primary)',
      color: 'var(--color-text-on-dark)',
      padding: '64px 48px 32px',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '48px',
      flexWrap: 'wrap',
      paddingBottom: '48px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxWidth: '320px'
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    alt: brandName,
    style: {
      height: '34px',
      width: 'auto',
      filter: 'brightness(0) invert(1)'
    }
  }) : React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.875rem',
      color: 'var(--color-text-on-dark)'
    }
  }, brandName), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      letterSpacing: 'var(--tracking-wide)',
      opacity: 0.75,
      margin: 0
    }
  }, tagline)), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '64px',
      flexWrap: 'wrap'
    }
  }, columns.map((col, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, col.heading), col.links.map((l, j) => React.createElement('a', {
    key: j,
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-text-on-dark)',
      textDecoration: 'none',
      opacity: 0.9
    }
  }, l)))))), React.createElement('div', {
    style: {
      borderTop: '1px solid oklch(from var(--reya-cream) l c h / 0.2)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      opacity: 0.6
    }
  }, address), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      opacity: 0.6
    }
  }, '\u00A9 ' + new Date().getFullYear() + ' ' + brandName)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar(props) {
  const {
    logoSrc,
    brandName = 'REYA',
    links = ['Residences', 'Amenities', 'Gallery', 'Contact'],
    ctaLabel = 'Enquire',
    onCtaClick,
    style
  } = props;
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '32px',
      padding: '20px 48px',
      background: 'var(--color-bg)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    alt: brandName,
    style: {
      height: '32px',
      width: 'auto'
    }
  }) : React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: '1.75rem',
      color: 'var(--color-text-primary)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, brandName)), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px'
    }
  }, links.map((l, i) => React.createElement('a', {
    key: i,
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-text-primary)',
      textDecoration: 'none'
    }
  }, l))), React.createElement('button', {
    onClick: onCtaClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-body-sm)',
      background: 'var(--color-accent-primary)',
      color: 'var(--color-text-on-accent)',
      border: 'none',
      borderRadius: 'var(--radius)',
      padding: '11px 24px',
      cursor: 'pointer'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
