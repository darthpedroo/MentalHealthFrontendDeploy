const TerserPlugin = require('terser-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const isEnvProduction = process.env.NODE_ENV === 'production';

const paths = {
  appHtml: path.resolve(__dirname, 'public/index.html'), // adjust the path based on your project structure
};

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.js',
  },

  // generate different source maps for dev and production
  devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html"),
  favicon: "./public/favicon.ico",
  filename: "index.html",
  manifest: "./public/manifest.json",
})],

module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'], // Ensure you have @babel/preset-react preset installed
        },
      },
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]', // Output file name and extension
          outputPath: 'images/', // Output directory (inside the 'dist' folder)
        },
      },
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
          presets: ['es2015']
      }
  }
    
  ],
},

  // required because the defaults for webpack -p don't remove multiline comments
  optimization:
    process.argv.indexOf('-p') === -1
      ? {}
      : {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                output: {
                  comments: false,
                },
              },
              extractComments: false,
            }),
          ],
        },

  // to mimic GitHub Pages serving 404.html for all paths
  // and test spa-github-pages redirect in dev
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /\//, to: '/404.html' }],
    },
  },
  
  mode: 'development'

};