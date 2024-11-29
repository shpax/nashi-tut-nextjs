import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: {
          DEFAULT: 'var(--secondary)',
          200: '#7eaff0',
          300: '#6ca4ed',
          400: '#5998eb',
          500: 'var(--secondary)',
          600: '#407fd2',
          700: '#3971ba',
        },
        'secondary-light': 'var(--secondary-light)',
        light: colors.neutral[100],
        dark: colors.neutral[700],
      },

      backgroundImage: {
        map: "url('/maps/map-light.webp')",
      },

      keyframes: {
        slide: {
          '0%, 100%': {
            'background-position': '45% 50%',
          },
          '50%': {
            'background-position': '55% 50%',
          },
        },
      },
      animation: {
        slide: 'slide 60s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
