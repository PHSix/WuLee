import antfu from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
	},
	rules: {
		'style/brace-style': ['warn', '1tbs'],
		'no-console': ['off'],
	},
	formatters: {
		css: 'prettier',
		html: 'prettier',
		prettierOptions: {
			tabWidth: 2,
			useTabs: true,
		},
	},
})
