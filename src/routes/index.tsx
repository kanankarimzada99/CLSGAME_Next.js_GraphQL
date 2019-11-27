const nextRoutes = require('next-routes')

const config = require('./config')

const r = nextRoutes()

const routeKeys = Object.keys(config)

routeKeys.map(key => {
  const route = config[key]
  r.add(key, route.link.as)
})

module.exports = r
