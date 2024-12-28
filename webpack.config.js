// import Dotenv from 'dotenv-webpack';
// const config = {
//     plugins: [new Dotenv()],
//     // Rest of your config
// };
// export default config;

const webpack = require('webpack');

module.exports = {
    // other configuration settings
    resolve: {
        fallback: {
            path: false,
            os: false,
            crypto: false,
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
};

// import path from 'path';
// import { Configuration } from 'webpack';

// const config: Configuration = {
//     context: __dirname,
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js',
//     },
//     resolve: {
//         fallback: {
//             path: require.resolve("path-browserify"),
//             os: require.resolve("os-browserify/browser"),
//             crypto: require.resolve("crypto-browserify")
//         }
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(jpg|png)$/,
//                 use: {
//                     loader: 'url-loader',
//                 },
//             },
//         ],
//     },
// };

// export default config;
