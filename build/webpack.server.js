const path = require('path');
const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  target: 'node', 
  entry: path.join(projectRoot, './entry-server.js'),
  output: {
	// commonjs规范输出
    libraryTarget: 'commonjs2', 
    path: path.join(projectRoot, 'dist'),
    filename: 'built-server-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js' 
    }
  }
}
