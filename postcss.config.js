module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-import": {},
    "postcss-pxtorem": {
      propList: ["*", "!letter-spacing"],
    },
  },
};
