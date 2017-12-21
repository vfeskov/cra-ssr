import serveStatic from 'serve-static'
import fs from 'fs'
import db from './db.json'
import { renderToStrings } from '../../client/src/renderToStrings'

export function prerenderClient () {
  const layout = fs.readFileSync('./public/layout.html').toString()

  return (req, res, next) => {
    if (req.method !== 'GET') { return next() }

    const app = renderToStrings(db)
    const content = layout
      .replace(
        '<div id="root"></div>',
        `<div id="root">${app.html}</div>`
      )
      .replace(
        '</head>',
        `<script>window.__INIT_STATE__=${app.state}</script></head>`
      )
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.from(content).length
    })
    res.end(content)
  }
}
