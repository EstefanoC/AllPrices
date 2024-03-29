/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0 5px 0 -5px #0000004a",
        button: "0 0px 15px 0px #0000004a",
        input: "0 0px 2px 0px #0000004a",
        card: "0 0px 0px 0px #0000004a",
      },
      colors: {
        background: "#f5f5f5",
        primary: "#fff",
        secondary: "#30ac68",
        text: "#141414",
        textSecondary: "#212121",
        borderPrimary: "rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        banner: "url(./assets/images/Banner.jpg)",
        AboutUs: "url(./assets/images/AboutUs2.jpg)",
        firstSection: "url(./assets/images/FirstSection.jpg)",
        fifthSection: "url(./assets/images/Email.jpg)",
      },
    },
    textShadow: {
      title: "0px 0px 5px #141414",
      p: "1px 1px 1px #141414",
    },
    animation: {
      "move-x": "MoveX 5s ease infinite",
      showCard: "Show 5s ease 1",
    },
    keyframes: {
      MoveX: {
        "0%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(30%)" },
        "100%": { transform: "translateX(0)" },
      },
      spin: {
        "100%": { transform: "rotate(360deg)" },
      },
      pulse: {
        "50%": { opacity: "0.5" },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
