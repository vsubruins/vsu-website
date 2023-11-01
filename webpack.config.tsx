const path = require( 'path' );
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
              },
        ]
    }
};