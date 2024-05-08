/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'td-width': '200px',
      },
      height: {
        'td-height': '200px',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
        }
      })
    }
  ],
}

