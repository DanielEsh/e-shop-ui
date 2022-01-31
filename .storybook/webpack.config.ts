const path = require("path")

module.exports = ({ config }) => {
    // a bunch of other rules here

    config.resolve.modules = [
        path.resolve(__dirname, "..", "src"),
        "node_modules",
    ]

    // Alternately, for an alias:
    config.resolve.alias = {
        "@": path.resolve(__dirname, "..", "src")
    }

    config.module.rules.push({
        test: /\.css$/,
        use: [
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            require('tailwindcss'),
                            require('autoprefixer'),
                        ]
                    }
                }
            },
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       ident: 'postcss',
        //       plugins: [
        //         require('tailwindcss'),
        //         require('autoprefixer'),
        //       ],
        //     },
        //   },
        ],
        include: path.resolve(__dirname, '../'),
    })

    return config
}
