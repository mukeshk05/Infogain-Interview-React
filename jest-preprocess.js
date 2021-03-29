const babelOptions = {
  presets: ["babel-preset-gatsby"],
}

/* eslint-disable import/no-extraneous-dependencies */
module.exports = require("babel-jest").createTransformer(babelOptions)
/* eslint-enable import/no-extraneous-dependencies */
