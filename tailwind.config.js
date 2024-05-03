/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,ts,tsx,js,jsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './views/**/*.{html,js,jsx,ts,tsx}',
    './styles/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          'primary-black': '#1A232E',
          'secondary-white': '#c7c7c7',
        },
        transitionTimingFunction: {
          'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
        },
      },
    },
  },
  plugins: [],
}

