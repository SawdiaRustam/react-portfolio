module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      xss: '280px',
      xs: '375px',
      sm: "480px",
      md: '768px',
      xmd: '820px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        darkGray: 'hsl(228, 12%, 20%)',
        lemon: '#F5DF4D',
        red: '#CD212A',
        lightBlue: '#56C6A9',
        yellow: '#FFA500',
        MediumBlue: '#00758F',
        purple: '#6B5876',
        darkBlue: '#282D3C',
        lightWhite: '#EDF1FF',
        Ash: '#A09998',
        orange: ' #FE840E',
        primary: '#4db5ff',
        MBlue: '#2c2c6c',
        

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
