// Dependencies.
var fse = require('fs-extra')
var getData = require('./get_data')
var patternsTemplatePath = require.resolve('./template.js')
var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var shellPath = require.resolve('../../shell.js')
var webpack = require('webpack')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')

// Defined later.
var PatternsTemplate
var ShellTemplate
var patternsData

function getPatternsTemplate () {
  webpackRequire(webpackConfig, patternsTemplatePath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    PatternsTemplate = factory()
    renderPatterns()
  })
}

function getShellTemplate () {
  webpackRequire(webpackConfig, shellPath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    ShellTemplate = factory()
    getPatternsTemplate()
  })
}

function renderPatterns () {
  var patternsElement = React.createElement(PatternsTemplate, {
    data: patternsData
  })

  var patternsMarkup = ReactDOMServer.renderToStaticMarkup(patternsElement)

  var shellElement = React.createElement(ShellTemplate, {
    script: 'index.js',
    markup: patternsMarkup
  })

  var html = ReactDOMServer.renderToStaticMarkup(shellElement)
  html = '<!doctype html>' + html
  html = pretty(html)

  fse.outputFileSync('./build/style_guide/patterns/index.html', html)
}

function generateBundle () {
  var imports = patternsData.map(function (pattern) {
    var path = pattern.path
    var componentName = path.replace('/template.js', '').split('/').pop()
    var componentPath = '.' + path
    var selector = '[data-component="' + componentName + '"]'

    return `
      import ${componentName} from '${componentPath}'
      ReactDOM.render(React.createElement(${componentName}), document.querySelector('${selector}'))
    `
  }).join('')

  var bundle = fse.readFileSync('./style_guide/bundle.js', 'utf8')
  var tempBundlePath = './style_guide/temp_bundle.js'
  var tempBundleFile = bundle.replace(/\/\*\s+{_DYNAMIC_INSERTION_POINT_}\s+\*\//gi, imports)

  fse.outputFileSync(tempBundlePath, tempBundleFile)

  webpackConfig.entry = tempBundlePath

  webpackConfig.output = {
    filename: 'index.js',
    path: process.cwd() + '/build/style_guide'
  }

  webpack(webpackConfig, function (error) {
    if (error) {
      console.error(error)
    }

    fse.removeSync(tempBundlePath)
  })
}

module.exports = function () {
  getData(function (data) {
    patternsData = data
    getShellTemplate()
    generateBundle()
  })
}
