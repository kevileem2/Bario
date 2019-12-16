module.exports = {
  root: true,
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
   "env": {
   "node": true,
   "browser": true,
   "es6": true
 },
  plugins: ['import'],
	settings: {
		'import/resolver': {
			node: {
				paths: ['app'],
				alias: {
					_assets: './app/assets',
					_shared: './app/shared',
					_screens: './app/screens',
					_navigation: './app/navigation',
					_theme: './app/theme',
				},
			},
		},
	},
}
