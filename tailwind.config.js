/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#00bcd4' },
          '50%': { color: '#ff4081' },
        },
      },
      animation: {
        colorChange: 'colorChange 2s infinite',
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        jump: 'jump 1s infinite',
      },
    },
  },
  plugins: [],
};
