// Dependencies.
var fse = require('fs-extra')

var screensTemplatePath = require.resolve('./template.js')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var shellPath = require.resolve('../../shell.js')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')

// Defined later.
var ScreensTemplate
var ShellTemplate

function getScreensTemplate () {
  webpackRequire(webpackConfig, screensTemplatePath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    ScreensTemplate = factory()
    renderScreens()
  })
}

function getShellTemplate () {
  webpackRequire(webpackConfig, shellPath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    ShellTemplate = factory()
    getScreensTemplate()
  })
}

var data = [
  {
    id: 'accounts',
    url: '../../',
    name: 'Accounts'
  },
  {
    id: 'profile',
    url: '../../#/profile',
    name: 'Profile'
  },
  {
    id: 'page_not_found',
    url: '../../#/404',
    name: 'Page Not Found'
  }
]

function renderScreens () {
  var screensElement = React.createElement(ScreensTemplate, {data: data})

  var screensMarkup = ReactDOMServer.renderToStaticMarkup(screensElement)

  var shellElement = React.createElement(ShellTemplate, {
    title: 'Project Screens',
    markup: screensMarkup
  })

  var html = ReactDOMServer.renderToStaticMarkup(shellElement)
  html = '<!doctype html>' + html

  fse.outputFileSync('./build/isg/screens/index.html', html)
}

// Kickoff.
getShellTemplate()
