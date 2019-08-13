const { override, addDecoratorsLegacy, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy(),//装饰器模式
  fixBabelImports('import', { //引入antd简化
    libraryName: 'antd',
    libraryDirectory: 'es',
      //style: 'css',
    style: true //使用less
  }),
  addLessLoader({//配置less
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' } //配置主题
  })
)
