module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        vilane: ["Vilane", "sans-serif"],
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
