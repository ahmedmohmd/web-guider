/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "facebook-color": "#3b5998",
        "twitter-color": "#55acee",
        "linkedin-color": "#3077b5",
        "github-color": "#161b22",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/line-clamp")],
};
