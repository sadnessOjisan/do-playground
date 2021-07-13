const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.jsx",

  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.jsx$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
