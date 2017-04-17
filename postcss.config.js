module.exports = context => ({
  parser: 'sugarss',
  map: false,
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
})
