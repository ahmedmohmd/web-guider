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

      fontFamily: {
        itim: "Itim",
        mitr: "Mitr",
      },
      keyframes: {
        arrow: {
          "0%": { transform: "translateX(-3px)" },
          "100%": { transform: "translateX(7px)" },
        },
        scrollBtn: {
          "0%": {
            transform: "translateY(8px)",
            borderRadius: "62% 38% 61% 39% / 43% 78% 22% 57%",
          },

          "100%": {
            transform: "translateY(-8px)",
            borderRadius: "36% 64% 26% 74% / 81% 54% 46% 19%",
          },
        },
      },

      animation: {
        arrow: "arrow 1s ease-in-out infinite alternate",
        scrollBtn: "scrollBtn 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/line-clamp")],
};
