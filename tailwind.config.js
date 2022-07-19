/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#01080E',
          light: '#011627',
          medium: '#011221',
        },
        secondary: {
          grey: '#607B96',
          green: '#3C9D93',
          purple: '4D5BCE',
          white: '#FFFFFF',
        },
        accent: {
          orange: '#FEA55F',
          green: '43D9AD',
          rust: '#E99287',
          purple: '#C98BDF',
        },
        lines: '#1E2D3D',
        gradients: {
          purple: '#4D5BCE',
          green: '#43D9AD',
        },
      },
    },
    plugins: [],
  },
}
