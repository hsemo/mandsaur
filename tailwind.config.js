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
      }
    },
  },
  plugins: [],
}

