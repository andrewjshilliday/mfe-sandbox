module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './apps/tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'comma-dangle': ['error', 'never']
  }
};


/* module.exports = {
  extends: ["plugin:unicorn/recommended", "prettier"],
  settings: {
    react: {
      rootDir: [
        "apps/server/",
        "packages/config/",
        "packages/tsconfig/"
      ]
    }
  }
}; */
