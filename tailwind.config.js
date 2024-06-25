// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        'screen': '100vh', // Customize 'h-screen' utility
      },
      padding: {
        '60': '60px'
      },
      screens: {
        'custom-md': '601px',
        'custom-lg': '1024px',
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
      fontSize: {
        '10px': '10px',
      },
      letterSpacing: {
        '0.2px': '0.2px',
      },
      boxShadow: {
        'inset-custom': 'inset 0 100px 0 0 #ffffffd1',
      },
      transitionProperty: {
        'box-shadow-color': 'box-shadow, color',
      },
      transitionDuration: {
        '40': '0.04s',
      },
      colors: {
        lightBlue: '#f0f8ff',
        lightGray: '#f7fafc',
        primary: '#4caf50',
        secondary: '#8bc34a',
      },
      spacing: {
        '128': '32rem',
      },
    },
    utilities: {
      // Define your custom utility
      '.transition-max-height': {
        transitionProperty: 'max-height',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '.font-optical-sizing-auto': {
        'font-optical-sizing': 'auto',
      },
      '.font-style-unset': {
        'font-style': 'unset',
      },
    },
  },
};
