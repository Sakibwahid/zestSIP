/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        lexend: ['Lexend', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        work: ['Work-sans', 'sans-serif'],
      },
      backgroundImage: {
        'orange-gradient': 'radial-gradient(circle, rgba(216, 124, 74, 0.6) 0%, rgba(216, 124, 74, 1) 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
   daisyui: {
    themes: [
      "light" // first one will be the default theme
    ],
  },
}