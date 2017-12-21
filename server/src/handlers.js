import db from './db.json'
import fs from 'fs'
import finalhandler from 'finalhandler'

export function api ({ method, url }, res, next) {
  if (method !== 'GET' || url !== '/api/posts') { return next() }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(db))
}

export function error (req, res) {
  return finalhandler(req, res)()
}
