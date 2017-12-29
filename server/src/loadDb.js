import fs from 'fs'

export default function loadDb () {
  return new Promise((r, e) =>
    fs.readFile('./db.json', (err, data) => {
      if (err) { return e(err) }
      const db = JSON.parse(data.toString())
      r(db)
    })
  )
}
