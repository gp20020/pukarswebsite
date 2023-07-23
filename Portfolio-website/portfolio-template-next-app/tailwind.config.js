/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      "outfit": ["Outfit", "sans-serif"],
      "pacifico": ["Pacifico", "sans-serif"],
    },
    // fontSize:{
    //   "3xl":""
    // }
    colors: {
      primary: '#000000',
      secondary: '#ffffff',

    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.5s infinite',
      },
      colors: {
        'grey-shade': '#DEDEDE',
        // "gray": {
        //   200: "#000000"
        // },
        // "blue": {
        //   200: "#000000"
        // }
      }
    },
  },
  plugins: [require('flowbite/plugin'),],
}
