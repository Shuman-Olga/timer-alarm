const { resolve } = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './js/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'  
    },
    module: {
        rules: [
            { 
                test: /\.(png|jpe?g|gif|mp3)$/i, 
                loader: 'file-loader' ,
                options: {
                    name: '[path][name].[ext]',
                }
            },
            { 
                test: /\.scss$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        port: 9000
      }
    
};