/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url(resources/bg.jpg)",
        'bg-register': "url(resources/bg1.jpg)",
        'bg-3': "url(resources/bg3.jpg)"
      },
      backgroundColor: {
              'register' : '#fef2da'
      },
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

