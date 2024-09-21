// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [ "./src/**/*.{js,jsx,ts,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',  // Full width on small screens
          md: '100%',  // Full width on medium screens
          lg: '1024px',  // Set custom width at large screens
          xl: '1280px',  // Set maximum width for extra-large screens
          '2xl': '1440px',  // Extra-wide screens
        },
      },
    },
  },
  plugins: [],
}
