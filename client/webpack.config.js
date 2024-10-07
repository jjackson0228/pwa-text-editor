const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin'); // Used for service worker and other PWA-related functionalities

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

// Exporting Webpack configuration
module.exports = () => {
  return {
    // Set the mode to 'development' to get unminified files with better error handling for development.
    mode: 'development', // Entry point for bundling
    entry: {
      main: './src/js/index.js', // Main application logic
      install: './src/js/install.js', // Logic for installing a PWA (if needed)
    },
    output: {
      // Output file configuration
      filename: '[name].bundle.js', // Dynamic output file names for each entry point
      path: path.resolve(__dirname, 'dist'), // Output directory
    },
    plugins: [
      // HtmlWebpackPlugin is used to generate an HTML file from the template and automatically inject scripts
      new HtmlWebpackPlugin({
        template: './index.html', // Path to the HTML template
        title: 'Webpack Plugin', //Title for teh generated HTML
      }),
      new MiniCssExtractPlugin(), //MiniCssExtractPlugin extracts CSS into separate files
      new InjectManifest({
        // InjectManifest plugin adds your custom service worker (swSrc) and outputs it as 'service-worker.js'
        swSrc: './src-sw.js', // Source of the custom service worker (swSrc) and outputs it as 'service-worker.js'
        swDest: 'service-worker.js', // Output name of the generated service worker file
      }),
      new WebpackPwaManifest({
        name: 'Just Another Text Editor', // Full name of your PWA
        short_name: 'JATE', // Short name, often displayed on home screen icons
        description: 'An easy-to-use text editor', // Description for the app
        icons: [
          {
            src: path.resolve('src/images/logo.png'), //Path to the app icon
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes for icon on different devices
          },
        ],
        orientation: 'portrait', // Preferred orientation
        display: 'standalone', // Ensures that it runs as a standalone app (no browser UI)
        background_color: '#7eb4e2', // Background color of the app’s splash screen
        theme_color: '#7eb4e2', // Color of the app’s top bar when it’s launched
        publicPath: '.', // Specifies the path for resources like icons and the manifest file
      }),
    ],

    // Define how to handle different types of modules
    module: {
      rules: [
        {
          // CSS loader: First, it extracts CSS into separate files (via MiniCssExtractPlugin) and then processes them using 'css-loader'
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extracts CSS into separate files and interprets CSS imports/exports
        },
        {
          // File loader for images: Handles asset files like images and bundles them appropriately
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource', // This copies image assets directly to the output folder
        },
        {
          // Babel loader: Transpiles modern JavaScript (ES6+) into ES5 using Babel
          test: /\.m?js$/, // Targets .js or .mjs files
          exclude: /(node_modules|bower_components)/, // Exclude third-party libraries in node_modules
          use: {
            loader: 'babel-loader', // Use Babel to transpile the JavaScript files
            options: {
              presets: ['@babel/preset-env'], // Use preset-env for compatibility with older browsers
            },
          },
        },
      ],
    },
  };
};
