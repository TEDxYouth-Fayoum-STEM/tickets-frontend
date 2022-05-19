const glob = require("glob");

function getContent() {
  return [...glob.sync("@(components|pages|layouts)/**/*.vue"), "app.vue"];
}

module.exports = getContent;
