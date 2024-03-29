const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/app.js', './src/app.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 8084,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/public'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'service_design.html',
            template: './src/html/service_design.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/html/about.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'price.html',
            template: './src/html/price.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'works.html',
            template: './src/html/works.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: './src/html/contacts.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'service_realisation.html',
            template: './src/html/service_realisation.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'service_manufacture.html',
            template: './src/html/service_manufacture.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|bmp|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    }
}