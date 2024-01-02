/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        
        XS:'500px',
        SM:"700px",
        MD:"920px",
        LG:"1290px"
      },
    },
  },
  plugins: [],
}

