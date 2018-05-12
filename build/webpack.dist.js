'use strict'
const merge = require('deep-assign')
const webpack = require('webpack')
const options = require('./options')
const base = require('./webpack.base.js')

const config = merge(base, {
	mode: 'production',
	entry: options.paths.resolve('src/index.js'),
	output: {
		filename: 'vue-seamless-scroll.min.js',
		path: options.paths.output.main,
		library: 'vueSeamlessScroll',
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	plugins: []
})

// debug and production
config.plugins = config.plugins.concat([
	new webpack.DefinePlugin({
		VERSION: JSON.stringify(options.version)
	})
])

module.exports = config
