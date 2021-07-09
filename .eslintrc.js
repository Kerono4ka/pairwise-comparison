module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        node: true
    },
    extends: ['eslint:recommended', 'google', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    rules: {
        'require-jsdoc': 0,
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prop-types': 'off'
    }
};
