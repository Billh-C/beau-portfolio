/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-img': "url('/src/assets/homeBG.png')",
        'linear-gradient': 'linear-gradient(180deg, rgba(0,0,0,1) 34%, rgba(0,0,0,0) 100%)'
        },
      colors: {
        'main': '#26272a',
        'accent': '#fe9d36',
        'secondary': '#404c4b'
      }
    },
  },
  plugins: [],
}

