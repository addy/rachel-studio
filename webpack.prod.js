/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  stats: 'errors-only',
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].br[query]',
      algorithm: 'brotliCompress',
      test: /\.(js|jsx|css|html|svg|jpg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    minimizer: ['...', new CssMinimizerPlugin()],
    splitChunks: { chunks: 'all' },
  },
});
