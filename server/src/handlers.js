import db from './db.json'
import fs from 'fs'
import { renderServerSide } from '../../client/src/renderServerSide'
import finalhandler from 'finalhandler'

export function api ({ method, url }, res, next) {
  if (method !== 'GET' || url !== '/api/posts') { return next() }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(db))
}

export function index () {
  const layout = fs.readFileSync('public/layout.html').toString()

  return ({ method }, res, next) => {
    if (method !== 'GET') { return next() }

    const app = renderServerSide(db)
    const content = layout
      .replace(
        '<div id="root"></div>',
        `<div id="root">${app.html}</div>`
      )
      .replace(
        '</head>',
        `<script>window.__INITIAL_STATE__='${app.state.replace(/'/g, '\\\'')}'</script></head>`
      )

    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.from(content).length
    })
    res.end(content)
  }
}

export function error (req, res) {
  return finalhandler(req, res)()
}
