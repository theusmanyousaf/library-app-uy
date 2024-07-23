/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontSize: {
      base: ['16px', '22px'],
      xl: ['20px', '24px'],
      '4xl': ['2.25rem', {
        lineHeight: '3rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    },
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
  },
};
export const plugins = [];


