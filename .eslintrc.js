module.exports = {
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
        'arrow-parens': ['error', 'always'],
        'space-in-parens': ['error', 'always'],
        'array-bracket-spacing': ['error', 'always'],
        'key-spacing': [
            'error',
            {
                "align": "colon",
                "afterColon": true
            }
        ],
        'no-undef': 0,
        'no-unused-vars': 0,
        'react/prop-types': 0,
        'no-mixed-spaces-and-tabs': 0,
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
