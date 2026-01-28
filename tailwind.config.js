/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <- Tailwind va a buscar todas las clases aquí
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
