module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: " blob 7s infinite",
        beat: "beat 1s ease-out infinite",
        wiggle: 'wiggle 1s ease-in-out infinite',
        handwiggle: 'wiggle 2s ease-in-out infinite',
        slideUpCub: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        beat: {
          "0%, 100%": {
            transform: "scale(1)"
          },
          "50%": {
            transform: "scale(1.2)"
          },
        },
        wiggle: {
          "0%, 100%": { transform: 'rotate(-7deg)' },
          "50%": { transform: 'rotate(7deg)' },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
      colors: {
        'laravel': '#f05340',
        'react': '#61dbfb',
        'vue': '#41b883',
        'flutter': '#027dfd',
        'red-laracast': '#f44881',
        'purple': {
          light: '#8b60ed',
          DEFAULT: '#a65fec',
          dark: '#84329B',
        },
        'orange': {
          light: '#feb47b',
          dark: '#ff7e5f'
        },
        'rhino': {
          light: '#26184c',
          dark: '#13093c',
        },
        'cursed-black': '#060606',
        'creator-light': '#dcf2ff',
        'flamingo': '#fc8eac',
        'link': '#ecf0f3',
      },
      screens: {
        '3xl': '1664px',
      }
    },
  },
  plugins: [
  ],
};