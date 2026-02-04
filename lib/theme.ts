/**
 * SITE THEME CONFIGURATION
 * ========================
 * Change colors, fonts, and styles here to update the entire site.
 *
 * To change the site's look:
 * 1. Update the colors below
 * 2. Restart the dev server (colors are compiled by Tailwind)
 *
 * Example: To change accent from gold to blue:
 *   accent: '#3B82F6',
 *   accentLight: '#93C5FD',
 *   accentDark: '#1D4ED8',
 */

export const theme = {
  // ===================
  // PRIMARY BRAND COLORS
  // ===================
  colors: {
    // Main brand color - used for headers, links, primary buttons
    primary: '#65DE5D',           // Green
    primaryDark: '#074E01',       // Dark green - text on light backgrounds
    primaryLight: '#E7FFEA',      // Light green - section backgrounds
    primaryAccent: '#61CE70',     // Accent green - hover states

    // Accent color - used for CTAs, highlights, navigation bar
    accent: '#C9A227',            // Gold
    accentLight: '#E8D48A',       // Light gold - nav background
    accentDark: '#9A7B0A',        // Dark gold - hover states

    // Text colors
    textPrimary: '#2D3748',       // Dark gray - main text
    textSecondary: '#4A5568',     // Medium gray - secondary text
    textMuted: '#54595F',         // Light gray - muted text

    // Background colors
    bgLight: '#F7FAFC',           // Light gray - section backgrounds
    bgDark: '#074E01',            // Dark green - dark sections
  },

  // ===================
  // FONTS (using next/font CSS variables for self-hosted fonts)
  // ===================
  fonts: {
    body: 'var(--font-roboto), sans-serif',
    heading: 'var(--font-roboto-slab), serif',
  },

  // ===================
  // CARD EFFECTS
  // ===================
  cards: {
    // Default card shadow
    shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    // Hover shadow
    shadowHover: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    // Border radius
    borderRadius: '0.75rem', // 12px
  },

  // ===================
  // BUTTON STYLES
  // ===================
  buttons: {
    borderRadius: '9999px', // Full rounded (pill shape)
    // Change to '0.5rem' for slightly rounded, '0' for square
  },
};

/**
 * CSS Variables for runtime theming
 * These are injected into :root in globals.css
 */
export const cssVariables = {
  '--color-primary': theme.colors.primary,
  '--color-primary-dark': theme.colors.primaryDark,
  '--color-primary-light': theme.colors.primaryLight,
  '--color-accent': theme.colors.accent,
  '--color-accent-light': theme.colors.accentLight,
  '--color-accent-dark': theme.colors.accentDark,
};

export default theme;
