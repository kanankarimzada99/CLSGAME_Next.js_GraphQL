const routes = require('next-routes')

const routesConfig = require('./config')

const r = routes()

const routeKeys = Object.keys(routesConfig)

routeKeys.map(key => {
  const route = routesConfig[key]
  r.add(key, route.link.as)
})

module.exports = r
