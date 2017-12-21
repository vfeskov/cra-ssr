export function chain (handlers) {
  return (req, res) => {
    [...handlers] // need to copy array because #reverse mutates it
      .reverse()
      .reduce(
        (next, handler) => {
          const args = [req, res].concat(next ? next : [])
          return () => handler(...args)
        },
        null
      )()
  }
}
