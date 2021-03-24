const path = require("path");

module.exports = {
    entry: {
        "rainbow-elements": path.join(__dirname, "rainbow-elements.ts"),
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist"),
        library: {
            name: "RainbowElements",
            type: "umd",
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
