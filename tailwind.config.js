/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAF8',
          secondary: '#F2F3F0',
          card: '#FFFFFF',
          dark: '#0F1115',
          'dark-secondary': '#161920',
          'dark-card': '#1C2029',
        },
        charcoal: {
          DEFAULT: '#171717',
          muted: '#737373',
          light: '#A3A3A3',
          border: '#E5E5E0',
          'border-dark': 'rgba(255, 255, 255, 0.1)',
        },
        accent: {
          blue: '#4169E1',
          'blue-hover': '#3154C4',
          'blue-subtle': '#EEF2FF',
          lavender: '#E9E5FF',
          'lavender-dark': '#C4B5FD',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'premium-hover': '0 20px 40px -15px rgba(65, 105, 225, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'accent-glow': '0 0 0 1px rgba(65, 105, 225, 0.2), 0 10px 30px -10px rgba(65, 105, 225, 0.25)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
