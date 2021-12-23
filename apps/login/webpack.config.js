const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const deps = require('./package.json').dependencies;

const env = process.env.NODE_ENV || 'development';
const prod = env === 'production';

module.exports = {
  entry: './src/index',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },
  devtool: 'source-map',
  optimization: {
    minimize: false
  },
  devServer: {
    port: 3001,
    hot: false,
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true
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
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'login',
      filename: 'remoteEntry.js',
      remotes: {
        portal: `portal@${
          prod ? 'https://mfe-sandbox-portal.s3.eu-west-1.amazonaws.com' : 'http://localhost:3000'
        }/remoteEntry.js`
      },
      exposes: {
        './Login': './src/App.jsx',
        './loginUtils': './src/lib/loginUtils.js'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom']
        }
      }
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html'
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/]
    })
  ]
};
