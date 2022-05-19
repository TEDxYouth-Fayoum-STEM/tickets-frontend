const plugin = require("tailwindcss/plugin");

function extractColorsAsProps(obj, group = "") {
  return Object.entries(obj).reduce((colors, color) => {
    const newColor =
      typeof color[1] === "string"
        ? {
            [`--color${group}-${color[0]}`]: color[1]
          }
        : extractColorsAsProps(color[1], `-${color[0]}`);
    return { ...colors, ...newColor };
  }, {});
}

function extractColorsPlugin({ addBase, theme }) {
  addBase({
    ":root": extractColorsAsProps(theme("colors"))
  });
}

module.exports = plugin(extractColorsPlugin);
