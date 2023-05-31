module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@controllers': './src/controllers',
          '@models': './src/models',
          '@config': './src/config',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    'babel-plugin-transform-typescript-metadata',
  ],
  ignore: [
    '**/*.spec.ts', // Ignora arquivos de testes no bundle
  ],
};
