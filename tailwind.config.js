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
      },
      keyframes:{
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
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        },
      },
      colors: {
        darkslateblue: '#5a4dae',
      },
      fontFamily: {
        dm: "'DM Mono', monospace",
      }
    },
  },
  plugins: [
  ],
};