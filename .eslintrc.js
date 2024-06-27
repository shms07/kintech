module.exports = {
  extends: ['@cybozu/eslint-config/presets/typescript-prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // 設定可能なオプションの一部. () はデフォルト値.
        singleQuote: true, // 引用符としてシングルクオートを使用する (false)
      },
    ],
  },
};
