# node-chai-code

## Steps:

1. ```bash
   yarn init
   ```
2. Or follow 3

```bash
  yarn add express mongoose

  yarn add -D nodemon eslint prettier
  yarn add -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
```

3.  Add these to `pacakge.json`
    ```json
    "devDependencies": {
     "eslint": "^9.16.0",
     "eslint-config-prettier": "^9.1.0",
     "eslint-plugin-import": "^2.31.0",
     "eslint-plugin-prettier": "^5.2.1",
     "nodemon": "^3.1.7",
     "prettier": "^3.3.3"
    },
    "dependencies": {
     "dotenv": "^16.4.7",
     "express": "^4.21.1",
     "mongoose": "^8.8.3"
    }
    ```
4.  Create files for prettier and eslint:

    ```js
    // eslint.config.js (create this at root)

    import eslint from '@eslint/js';
    import importPlugin from 'eslint-plugin-import';
    import prettier from 'eslint-plugin-prettier';

    export default [
      eslint.configs.recommended,
      {
        plugins: {
          prettier,
          import: importPlugin,
        },
        languageOptions: {
          globals: {
            console: 'readonly',
            process: 'readonly',
          },
          parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: {
              node: true,
            },
          },
        },
        rules: {
          // Formatting
          'prettier/prettier': [
            'error',
            {
              prettierPath: './prettierrc',
            },
          ],
          // Basic Error Handling
          'no-unused-vars': 'warn',
          'no-console': [
            'warn',
            {
              allow: ['error', 'warn', 'info'],
            },
          ],

          // Import Best Practices
          'import/order': [
            'error',
            {
              groups: [
                ['builtin', 'external'],
                ['internal', 'parent', 'sibling', 'index'],
              ],
              'newlines-between': 'always',
              alphabetize: {
                order: 'asc',
                caseInsensitive: true,
              },
            },
          ],
          'import/newline-after-import': 'error',
          'import/no-duplicates': 'error',

          // Basic Error Prevention
          eqeqeq: ['error', 'smart'],
          'no-return-await': 'error',
        },
      },
    ];
    ```

    and

    ```json
    // .prettierrc (create this at root)
    {
      "singleQuote": true,
      "trailingComma": "es5",
      "semi": true,
      "tabWidth": 2,
      "printWidth": 120,
      "arrowParens": "always",
      "bracketSpacing": true,
      "endOfLine": "auto"
    }
    ```
