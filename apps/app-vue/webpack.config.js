const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

const env = process.env.NODE_ENV || 'development';
const prod = env === 'production';

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json']
  },
  devServer: {
    port: 3021,
    hot: false,
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    headers: {
      'Access-Control-AllowOrigin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['vue-style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_vue',
      filename: 'remoteEntry.js',
      remotes: {
        portal: `portal@${
          prod ? 'https://mfe-sandbox-portal.s3.eu-west-1.amazonaws.com' : 'http://localhost:3000'
        }/remoteEntry.js`
      },
      exposes: {
        './App': './src/bootstrap'
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: deps.vue
        }
      }
    }),
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html'
    })
  ]
};
