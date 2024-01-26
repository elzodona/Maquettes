/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        'yellow-600' : "#ca8a04",
        'yellow-700': "#a16207",
        'yellow-800' : "#a16207",
        'yellow-100': "#fef9c3" 
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
]

}

