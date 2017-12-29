import serveStatic from 'serve-static'
import fs from 'fs'
import loadDb from './loadDb'
import { renderToStrings } from '../../client/src/renderToStrings'

export function prerenderClient () {
  const layout = fs.readFileSync('./public/layout.html').toString()

  return async (req, res, next) => {
    if (req.method !== 'GET') { return next() }

    const db = await loadDb()
    const { html, state } = renderToStrings(db)
    const content = layout
      .replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
      .replace(
        '</head>',
        `<script>window.__INIT_STATE__=${state}</script></head>`
      )
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.from(content).length
    })
    res.end(content)
  }
}
