/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,css}"],
  theme: {
    extend: {
      fontFamily: {
        'hxbold': ['HankenXBold'],
        'hbold': ['HankenBold'],
        'hmedium': ['HankenMedium'],
        'hregular': ['HankenRegular'],
      }
    },
  },
  plugins: [],
}

