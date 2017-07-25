const path = require('path');


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/src/index.js'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '../public/dist/js'),
    filename: 'bundle.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, '/src'),
        loader: 'babel-loader',
        options: {
          presets: ["react", "es2015", "stage-2"],
          plugins: [["import", { "libraryName": "antd", "style": "css" }]]
        }
    },
    {
      test: /\.css$/,
        loader: 'style-loader!css-loader'
    }
  ],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  // watch: true
};