const path = require('path');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const deps = require('./package.json').dependencies;

const env = process.env.NODE_ENV || 'development';
const prod = env === 'production';

module.exports = {
  entry: './src/index',
  /* output: {
    publicPath: prod ? 'https://d3serxekmowfie.cloudfront.net/' : 'http://localhost:3000/'
  }, */
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },
  devtool: 'source-map',
  optimization: {
    minimize: false
  },
  devServer: {
    port: 3000,
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
      name: 'portal',
      filename: 'remoteEntry.js',
      remotes: {
        login: `login@${prod ? 'https://mfe-sandbox-login.s3.eu-west-1.amazonaws.com' : 'http://localhost:3001'}/remoteEntry.js`,
        home: `home@${prod ? 'https://mfe-sandbox-home.s3.eu-west-1.amazonaws.com' : 'http://localhost:3002'}/remoteEntry.js`,
        app1: `app1@${prod ? 'https://mfe-sandbox-app1.s3.eu-west-1.amazonaws.com' : 'http://localhost:3003'}/remoteEntry.js`,
        app2: `app2@${prod ? 'https://mfe-sandbox-app2.s3.eu-west-1.amazonaws.com' : 'http://localhost:3004'}/remoteEntry.js`,
        app3: `app3@${prod ? 'https://mfe-sandbox-app3.s3.eu-west-1.amazonaws.com' : 'http://localhost:3005'}/remoteEntry.js`,
        app4: `app4@${prod ? 'https://mfe-sandbox-app4.s3.eu-west-1.amazonaws.com' : 'http://localhost:3006'}/remoteEntry.js`,
        appSvelte: `app_svelte@${prod ? 'https://mfe-sandbox-appsvelte.s3.eu-west-1.amazonaws.com' : 'http://localhost:3020'}/remoteEntry.js`,
        appVue: `app_vue@${prod ? 'https://mfe-sandbox-appvue.s3.eu-west-1.amazonaws.com' : 'http://localhost:3021'}/remoteEntry.js`
      },
      exposes: {
        './Portal': './src/App.tsx'
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
    new LiveReloadPlugin({
      port: 35729
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      // base: prod ? 'https://d3serxekmowfie.cloudfront.net/' : 'http://localhost:3000/'
    })
  ]
};
