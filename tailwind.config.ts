import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#63A7DE',
          medium: '#5289C7',
          navy: '#292D78',
          charcoal: '#4E4E50',
          silver: '#919395',
          cream: '#F5F7FA',
          accent: '#63A7DE',
          ink: '#161B2F',
        },
      },
      boxShadow: {
        soft: '0 24px 60px -30px rgba(41, 45, 120, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
