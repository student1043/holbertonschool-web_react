const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    module: {
        rules: [
          {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            type: "asset",
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
				    use: [
					      'file-loader',
					      {
						        loader: 'image-webpack-loader',
						        options: {
							        bypassOnDebug: true,
							        disable: true,
						},
					},
				],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            resolve: {
                extensions: [".js", ".jsx"]
            },
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
      },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],

    devServer: {
        contentBase: 'dist',
        open: true,
        hot: true,
    },
	  devtool: 'inline-source-map',
	  performance: {
    maxAssetSize: 100000
  }
};
