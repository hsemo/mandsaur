import plugin from 'tailwindcss';
import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          from: { transform: "scale(0)"},
          to: { transform: "scale(1)"}
        }
      },

      animation: {
        zoom: "zoom 0.6s"
      },

      textShadow: {
        sm: '0 0 3px var(--tw-shadow-color)',
        DEFAULT: '0 0 5px var(--tw-shadow-color)',
        lg: '0 0 7px var(--tw-shadow-color)',
        xl: '0 0 9px var(--tw-shadow-color)',
      }
    },
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

