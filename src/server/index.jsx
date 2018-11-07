/* eslint-disable no-underscore-dangle */

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from '../App'

const app = express()
app.use(express.static('./dist/client'))
app.engine('ejs', require('ejs').__express)

app.set('view engine', 'ejs')

app.get('/*', (req, res) => {
  res.render('pages/index', {
    reactAppCode: renderToString(
      <StaticRouter context={{}} location={req.url}>
        <App />
      </StaticRouter>
    )
  })
})

app.use((req, res) => {
  res.redirect('/')
})

app.listen(9955)

console.log('Listening on http://localhost:9955')
