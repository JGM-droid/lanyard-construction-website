import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a',
          charcoal: '#111827',
          accent: '#c66f2d',
          cream: '#f7f4ee',
        },
      },
      boxShadow: {
        soft: '0 18px 45px -24px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
