const path = require('path');

module.exports = {
  externals: {
        c3: 'c3',
    },
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'this',
        filename: 'build.js'
    },
    module: {
        // rules will get concatenated!
        rules: [{
          test: /\.css$/,
          use: [{
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
          ]
        }],
  },
};