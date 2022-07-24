// Ten modul pozwoli nam zarzadzac sciezkami
import path from 'path'
// var path = require('path')
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
    // SEKCJA ENTRY
    // W tej sekcji podajesz pliki JS, które maja byc skompilowane
    // Kazdy plik JS zapisywany w postaci:
    // chunk: sciezka do pliku
    entry: {
        index: './src/js/index.js'
    },

    // SEKCJA MODULE
    // Okresla co robic z ktorymi plikami
    module: {
        rules: [
            // okreslamy co ma sie dziac z plikami JS
            {
                // okreslasz ktore pliki maja byc brane pod uwage - wszystkie pliki o
                // rozszerzeniu .js
                test: /\.js$/,
                exclude: /node_modules/,
                // co mam zrobic z kazdym takim plikiem?
                // przepuszczam go przez babel-loader, ktory kompiluje plik JS
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },

    // SEKCJA OUTPUT
    // Mowi nam gdzie ma byc przechowany wynik budowania projektu
    output: {
        // okreslasz pod jaka lokalizacja ma byc schowany plik wynikowy
        path: path.resolve(__dirname, './dist'),
        // ustalasz nazwe pliku wynikowego
        filename: "./js/[name].bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            // Do katalogu wyjsciowego wygeneruj plik index.html
            filename: 'index.html',
            // nadaj mu title o wartosci 'Index'
            title: 'Index',
            // A plik ten wygeneruj na podstawie pliku, ktorego sciezke okreslasz ponizej
            template: path.resolve(__dirname, './src/index.html'),
            // Dodatkowo w pliku wynikowym osadz skrypt ktory jest symbolicznie nazwany u nas 'index'
            chunks: ['index']
        }),
        new CleanWebpackPlugin(),
        // Tutaj musisz jeszcze dodatkowo skonfigurowac plugin MiniCssExtractPlugin
        // W tej konfiguracji okreslasz gdzie w katalogu dist beda osadzane pliki CSS
        new MiniCssExtractPlugin({
            filename: "./css/[name].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets', to: './assets' }
            ]
        })
    ],
    devtool: 'eval-source-map', // pokazuje szczegoly z podzialem na pliki
    // devtool: 'source-map', // nie pokazuje szczegolow
    mode: "development",
    devServer: {
        // Ustalasz z jakiej lokalizacji maja byc ladowane pliki do dev servera
        static: path.resolve(__dirname, './dist'),
        port: 3000,
        // Aplikacja zostanie uruchomiona w nowej karcie domyslnie ustawionej przegladarki
        open: true
    }
}
