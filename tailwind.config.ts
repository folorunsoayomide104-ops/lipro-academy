import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A1A2E',
        'navy-dark': '#0B1120',
        gold: '#D4AF37',
        'gold-dark': '#B8860B',
        teal: '#0D9488',
        'teal-light': '#14B8A6',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config
