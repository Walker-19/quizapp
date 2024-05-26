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
        'bg-3': "url(resources/bg3.jpg)",
        'bg-question': 'url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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

