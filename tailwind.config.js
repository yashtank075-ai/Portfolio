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
        ivory: {
          DEFAULT: '#F5F2EB',
          elevated: '#FAF8F3',
          warm: '#EFECE3',
        },
        ink: {
          DEFAULT: '#171714',
          muted: '#2A2925',
          deep: '#0E0E0C',
        },
        stone: {
          surface: '#E8E4DB',
          subtle: '#DFDBD1',
          rule: '#D8D3C8',
        },
        brass: {
          DEFAULT: '#D9C8A5',
          dark: '#8C734B',
          rich: '#9B804E',
          muted: '#C5B492',
          tint: 'rgba(217, 200, 165, 0.15)',
        },
        warmgray: {
          DEFAULT: '#5A574F',
          light: '#767268',
          dark: '#3D3B35',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 4px 20px -2px rgba(23, 23, 20, 0.05)',
        'editorial-hover': '0 12px 32px -4px rgba(23, 23, 20, 0.09)',
        'editorial-brass': '0 8px 24px -4px rgba(140, 115, 75, 0.15)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}

