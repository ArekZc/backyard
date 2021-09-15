const cssModuleRegex = /\.module\.css$/;

module.exports = (
  config,
  options,
  targetOptions
) => {
  const cssRule = config.module.rules[4];
  const postcssLoader = cssRule.rules[0].oneOf[0].use[1];

  cssRule.exclude = cssModuleRegex;

  config.module.rules.push({
    test: cssModuleRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true,
          modules: true,
        },
      },
      postcssLoader
    ]
  });

  return config;
};
