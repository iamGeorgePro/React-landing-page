/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: 'true',
      padding: '0.9rem',
    },
    extend: {
      colors: {
        'buttonColor': '#EBB40A',
      },

      boxShadow:{
        'shadows': '0px 4px 4px 0px #00000040',
        'btnShadows': '0px 0px 4px 0px #00000040'
      },

      letterSpacing: {
        normal: '0.08rem',
        wide: '.025em',
        wider: '.05em',
        widest: '3px',
      },
    },
  },
  plugins: [],
}
