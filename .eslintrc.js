module.exports = {
	parser: 'babel-eslint',
	env: {
		es6: true,
		browser: true,
		node: true,
		jquery: true,
		amd: true
	},
	parserOptions: {
		ecmaFeatures: {},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	extends: [
		'wordpress',
		'eslint:recommended'
	],
	ignorePatterns: [
		'node_modules/*',
		'assets',
		'**/*.min.js'
	],
	rules: {
		'jsdoc/require-param': 0,
		'no-console': 1,
		'no-unused-vars': 1,
		'comma-dangle': 0,
	},
	globals: {
		wp: true,
		jQuery: true,
		websiteData: true
	}
};
