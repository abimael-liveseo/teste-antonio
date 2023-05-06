/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary-color' : '#605BFF',
      'primary-two-color' : '#7975FF',
      'text-primary' : '#1E1AF7',
      'primary-three-color' : '#B9B7FD',
      'primary-four-color' : '#B5B3FF',
      'secondary-color' : '#FAD55E',
      'heading' : '#292968',
      'body-color' : '#3D3D66',
      'color-business' : '#4643D3',
      'inactive' : '#70708C',
      'text-color' : '#222222',
      'btn-bg' : '#F4DCDC'
      },
      fontSize: {
        'body-font' : '1rem',
        'heading' : '3.75rem',
        'btn-text' : '1rem',
        'btn-text-small' : '0.75rem'
      },
      fontFamily: {
        'open-sans' : ['Open Sans'],
        'lato' : ['Lato']
      },
      backgroundColor: {
        'section-hero' : 'linear-gradient(108.45deg, #FFDEAD 0.7%, rgba(250, 239, 227, 0) 94.85%)',
        'gradient-btn' : "background-color: 'linear-gradient(141.82deg, #FAD961 13.67%, #F76B1C 84.68%);'"
      }
    },
  },
  plugins: [],
}