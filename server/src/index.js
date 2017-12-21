import http from 'http'
import serveStatic from 'serve-static'
import { api, index, error } from './handlers'
import { chain } from './util'

const envSpecificHandlers = process.env.NODE_ENV !== 'production' ? [] : [
  serveStatic('public'),
  index()
]

const handlers = [
  api,
  ...envSpecificHandlers,
  error
]

const server = http.createServer(chain(handlers))

server.listen(process.env.PORT || 3000)

