/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#241512",
          light: "#3A2620",
        },
        coffee: {
          DEFAULT: "#5C3A21",
          light: "#7A4E2C",
          dark: "#442A19",
        },
        cream: {
          DEFAULT: "#F6EEE1",
          soft: "#FBF7EF",
          dark: "#E8DAC3",
        },
        copper: "#B27B4A",
        ink: "#17100D",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.14em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(23, 16, 13, 0.35)",
      },
    },
  },
  plugins: [],
};
