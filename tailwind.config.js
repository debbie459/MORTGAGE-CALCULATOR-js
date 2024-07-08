/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // your custom configurations
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive'], // Ensure responsive variants are enabled
    },
  },
  plugins: [],
}
