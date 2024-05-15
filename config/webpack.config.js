const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.config.js");
const esConfig = require("./webpack.es.config.js");
const umdConfig = require("./webpack.umd.config.js");

module.exports = [
  merge(commonConfig, esConfig),
  merge(commonConfig, umdConfig),
];
