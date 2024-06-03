/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#003F8F",
        "secondary" : "#EBECED",
        "onSecondary" : "#0E0F0E",
        "blurOnSecondary" : "#373632",
        "onWhite" : "#60606F",
        
      },
      borderRadius: {
        'primary': '15px',
        'big' : "300px",
        
      }
    },
  },
  plugins: [],
}

