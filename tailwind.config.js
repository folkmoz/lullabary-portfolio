/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E7496",
        secondary: "#ECEDD0",
        "red-custom": "#A41D1E",
      },
      fontFamily: {
        wagon: ["Wagon", "sans-serif"],
        varent: ["VarentGrotesk", "sans-serif"],
        "le-murmure": ["Le Murmure", "sans-serif"],
        andalos: ["Andalos", "sans-serif"],
        thai: ["IBM Plex Sans Thai", "sans-serif"],
        bella: ["Bella Sophie", "sans-serif"],
        monotes: ["Monotes", "sans-serif"],
      },

      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        rotateFrontBack: {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "75%": { transform: "scale(1.1)" },
        },
        flip: {
          "0%, 100%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(180deg)" },
        },
      },
      animation: {
        bounce: "bounce 0.5s ease-in-out infinite",
        spin: "spin 1s linear infinite",
        scaleUp: "scaleUp 0.6s ease-in-out infinite",
        rotateFrontBack: "rotateFrontBack 1s ease-in-out infinite",
        pulse: "pulse 1s ease-in-out infinite",
        shake: "shake 0.5s ease-in-out infinite",
        heartbeat: "heartbeat 1.2s ease-in-out infinite",
        flip: "flip 1s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
