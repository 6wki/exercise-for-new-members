/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        redpink: "#EC3A47",
        opaqueBlack: "#1E293B",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1158px",
      xl: "1280px",
      // ...
    },
  },
  plugins: [],
};
