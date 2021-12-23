module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned']
  },
  settings: {
    react: {
      rootDir: [
        'apps/portal/',
        'apps/login/',
        'apps/home/',
        'apps/app1/',
        'apps/app2/',
        'apps/app3/',
        'apps/app4/',
        'packages/config/',
        'packages/tsconfig/'
      ]
    }
  }
};
