const path = require('path')

// メインプロセスの設定
const main = {
    mode: 'development',
    target: 'electron-main',
    entry: path.join(__dirname, 'src', 'main.ts'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
}

// レンダラープロセスの設定
const renderer = {
    mode: 'development',
    target: 'electron-renderer',
    devtool: 'inline-source-map',
    entry: path.join(__dirname, 'src', 'renderer', 'index.tsx'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist', 'scripts')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
}

module.exports = [main, renderer];
