/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom color definitions here
        'primary': '#f6f5f8',
        'secondary': '#00b7aa',
        'text-color': '#333e48'
      },
      container: {
        center: true,
        padding: '5rem', // You can adjust the padding as needed
      }, fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}