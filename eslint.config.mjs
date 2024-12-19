import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',

  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,

  jsonc: false,
  yaml: false,

  ignores: [],
  rules: {
    'antfu/top-level-function': 'off',
    'ts/explicit-function-return-type': 'warn',
    'ts/consistent-type-definitions': 'off',
    'style/brace-style': 'off',
  },
})
