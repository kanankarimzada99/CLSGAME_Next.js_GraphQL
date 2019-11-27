const express = require('express')
const next = require('next')

// const config = require('../config')
const routes = require('../src/routes')
const graphql = require('./api')
// const logger = require('./utils/logger')

// const stage = config.get('env')
// const host = config.get('server.host')
// const port = config.get('server.port')
const host = 'localhost'
const port = 3000

// const isDevMode = stage === 'local'
const app = next({ dir: './src', dev: true })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.use('/graphql', graphql)

  server.get('*', (req: any, res: any) => {
    return handler(req, res)
  })

  server.listen(port, host, (err: any) => {
    if (err) throw err

    // console.log(`[MAIN SERVER] APP_ENV: ${stage}`)
    console.log(`[MAIN SERVER] Ready on http://${host}:${port}`)
    // logger.info(`[MAIN SERVER] APP_ENV: ${stage}`)
    // logger.info(`[MAIN SERVER] Ready on PORT: ${port}`)
  })
})

// logger.debug('SERVER SIDE CONFIG', config)
// process.on('unhandledRejection', error => {
//   // logger.error('unhandledRejection', error)
//   console.log('unhandledRejection', error)
//   process.exit(1)
// })
