module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-proposal-export-default-from',
  ];

  return { presets, plugins };
};
