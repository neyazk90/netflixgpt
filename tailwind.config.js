/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#257fbb;',
        red: 'red',
        green: 'green',
        black: '#000',
        white:'#fff',
      }
    },
  },
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
    'sm': '576px',
      // => @media (min-width: 576px) { ... }

    'md': '960px',
    // => @media (min-width: 960px) { ... }

    'lg': '1440px',
    // => @media (min-width: 1440px) { ... }
  },
  plugins: [],
}

