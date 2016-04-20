var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  // ビルドするファイル
  entry: './src/index.jsx',

  // 出力ファイル
  output: {
    // 出力先ディレクトリ
    path: './dist',
    // 出力ファイル名
    filename: 'bundle.js'
  },

  // モジュールの名前解決
  resolve: {
    // 省略する拡張子を配列形式で記述
    extensions: ['', '.js', '.jsx']
  },

  devtool: '#source-map', // ソースマップを出力する設定

  // モジュール
  module: {
    // ローダー（変換ツール）
    loaders: [
      // babel-loader
      // es6をes5に変換してくれる
      {
        // 対象ファイルのフィルタ（ここでは.js, .jsxファイルに限定している）
        test: /\.jsx?$/,
        // 除外するパス（ここではnode_modulesディレクトリを除外）
        exclude: /node_modules/,
        // 使うローダー
        loader: 'babel' // babel-loaderは古い名前なので使えない
      }
    ]
  },

  // プラグイン
  plugins: [
    // モジュールへ設定値を適用するプラグイン
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')  // reactをMinifyするため
      }
    }),
    // Minify
    new webpack.optimize.UglifyJsPlugin(),
    // 被っているモジュールがあったら重複して読み込まない
    // new webpack.optimize.DedupePlugin(), // ファイルが大きくなったら試す
    // bundleしたjsファイルを参照するHTMLを生成してくれるプラグイン
    new HtmlWebpackPlugin()
  ]
}

module.exports = config
