const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' }]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: "./tsconfig.json"
            })
        ],
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
