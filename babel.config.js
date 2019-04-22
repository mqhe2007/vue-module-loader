module.exports = function(api) {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '2'
      }
    ]
  ]
  return {
    presets
  }
}
