import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typeScryptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        typeScryptLoader,
        cssLoaders,
    ]
}