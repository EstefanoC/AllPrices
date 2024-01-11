/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0 5px 0 -5px #0000004a",
        button: "0 0px 15px 0px #0000004a",
      },
      colors: {
        primary: "#fff",
        secondary: "#30ac68",
        borderPrimary: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
