/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-login': 'url(./images/bg-login.jpg)'
      }
    },
  },
  plugins: [],
}

