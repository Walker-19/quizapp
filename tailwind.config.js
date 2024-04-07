/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'box-login': '40rem', 
        modal: 'calc(100% - 85px)'
      }, 
      height: {
        calc: 'calc(100% - 120px)',
      },
      minHeight:  {
        modal: 'calc(100% - 25px)'
    },
  },
  plugins: [],
}
}

