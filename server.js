const fs = require('fs')
const path = require('path')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync('./index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

const app = express()

app.get('*', (req, res) => {
  const context = { url: req.url }

  // 不用在传入一个应用程序，在执行bundle的时候已经自动创建过
  renderer.renderToString(context, (err, html) => {
    console.log(err)
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

app.listen(8080)
