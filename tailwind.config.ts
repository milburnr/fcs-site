import type { Config } from "tailwindcss";
import { theme } from "./lib/theme";

/**
 * TAILWIND CONFIGURATION
 * ======================
 * Colors are imported from lib/theme.ts for centralized control.
 * To change the site's color scheme, edit lib/theme.ts
 */

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors - imported from theme.ts for centralized control
        brand: {
          // Primary brand colors
          green: theme.colors.primary,
          'green-dark': theme.colors.primaryDark,
          'green-accent': theme.colors.primaryAccent,
          'green-forest': '#2E5E34',  // Forest green for text
          'green-bg': theme.colors.primaryLight,
          'green-preloader': '#173617',

          // Accent colors (gold)
          gold: theme.colors.accent,
          'gold-light': theme.colors.accentLight,
          'gold-dark': theme.colors.accentDark,
          'gold-accent': '#D4AF37',
          'gold-bg': '#FDF8E7',  // Light gold background for residential silo
        },
        gray: {
          primary: theme.colors.textMuted,
          text: theme.colors.textSecondary,
          dark: theme.colors.textPrimary,
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: [theme.fonts.body],
        heading: [theme.fonts.heading],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
