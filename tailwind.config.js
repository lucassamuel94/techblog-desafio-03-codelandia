/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    }
    ,
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      brand: '#846AFF',
      background: '#F8F8FF',
      white: '#FFFFFF',
      dark: {
        10: '#121214',
        20: '#7C7C8A',
        30: '#EAEAEA',
        40: '#EEEEFF',
        50: '#F8F8FF',
        60: '#FFFFFF'
      }
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins:
    [
      require("tailwindcss-animate"),
      require('@tailwindcss/container-queries'),
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar')
    ],
}