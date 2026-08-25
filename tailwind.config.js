/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./attention-by-design/index.html",
    "./the-firelit-mind/index.html",
    "./privacy/index.html",
    "./App.tsx",
    "./index.tsx",
    "./data.ts",
    "./analytics.ts",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
        display: ['Merriweather', 'serif'],
      },
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          800: '#292524',
          900: '#1c1917',
        },
        amber: {
          900: '#78350f',
        }
      }
    },
  },
  plugins: [],
}
