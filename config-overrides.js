module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...

    config.module.rules = [...config.module.rules, 
        {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'file-loader',
            },
        }
      ]

    return config
}