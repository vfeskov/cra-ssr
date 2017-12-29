import finalhandler from 'finalhandler'
import loadDb from './loadDb'

export async function api ({ method, url }, res, next) {
  if (method !== 'GET' || url !== '/api/posts') { return next() }
  const db = await loadDb()
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(db))
}

export function error (req, res, next, err) {
  return finalhandler(req, res)(err)
}
