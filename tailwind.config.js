const extractColorsPlugin = require("./tailwind/colors-props");

module.exports = {
  content: ["components/**/*.vue", "pages/**/*.vue", "layouts/**/*.vue", "app.vue"],
  plugins: [extractColorsPlugin, require("@tailwindcss/forms")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#e62b1e",
          300: "#ff2b06",
          200: "#ff4949",
          100: "#fe9f9f",
          50: "#ffebe9"
        },
        dark: "#191d24",
        light: "#f7f7f7",
        brand: {
          fb: "#4267b2",
          ig: "#c13584",
          tw: "#1da1f2",
          ln: "#0a66c2"
        }
      },
      width: {
        sm: "600px", // 640px
        md: "645px", // 768px
        lg: "900px", // 1024px
        "lg-f": "850px",
        xl: "1025px" // 1280px
      },
      maxWidth: {
        ">md": "26rem"
      },
      fontWeight: {
        "bold-ted": 1000
      },
      fontFamily: {
        ted: "Helvetica"
      },
      letterSpacing: {
        ted: 0
      },
      lineHeight: {
        ted: 0.75
      }
    }
  }
};
