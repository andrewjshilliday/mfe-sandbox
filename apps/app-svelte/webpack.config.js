const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

const env = process.env.NODE_ENV || 'development';
const prod = env === 'production';

module.exports = {
  entry: './src/index.js',
  resolve: {
		alias: {
			svelte: path.dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
  devServer: {
    port: 3020,
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
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svelte$/,
        use: 'svelte-loader'
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_svelte',
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
    new HtmlWebPackPlugin({
      template: './public/index.html',
      hash: true
    })
  ]
};
