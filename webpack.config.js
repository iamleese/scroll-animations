//webpack.config.js

const path = require("path")

module.exports = {
  entry : "./src/frontend.js",
  mode :  "production",
  output : {
    path: path.resolve(__dirname, "js"),
    filename: "frontend.js"
  }
}