/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        redpink: "#EC3A47",
      }
    },
  },
  plugins: [],
};
