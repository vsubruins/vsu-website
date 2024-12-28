const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ];

  return config;
};


// module.exports = function override(config, env) {
//     // New config, e.g. config.plugins.push...

//     config.module.rules = [...config.module.rules, 
//         {
//             test: /\.(jpg|png)$/,
//             use: {
//               loader: 'file-loader',
//             },
//         }
//       ]

//     return config
// }