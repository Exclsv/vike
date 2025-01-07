import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { universalSymbol } from '@universal-middleware/core'
import { createMiddleware } from '@universal-middleware/express'
import { type MiddlewareDefinition, type RouteDefinition, UniversalRouter, apply } from '@universal-middleware/router'
import express from 'express'
import { getMiddlewares } from 'vike/__internal'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = __dirname
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
const hmrPort = process.env.HMR_PORT ? parseInt(process.env.HMR_PORT, 10) : 24678

export default (await startServer()) as unknown

async function startServer() {
  const app = express()

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(`${root}/dist/client`))
  } else {
    // Instantiate Vite's development server and integrate its middleware to our server.
    // ! We should instantiate it *only* in development. (It isn't needed in production
    // and would unnecessarily bloat our server in production.)
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true, hmr: { port: hmrPort } }
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }

  const middlewares = (await getMiddlewares()) as (RouteDefinition | MiddlewareDefinition)[]
  const router = new UniversalRouter()
  apply(router, middlewares)
  app.all('*', createMiddleware(() => router[universalSymbol])())
  // TODO replace with UniversalExpressRouter once done.
  //      It should look like this:
  // const router = new UniversalExpressRouter(app)
  // apply(router, middlewares)
  //      So no need for manually calling app.*, and rely on express routing

  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
  })

  return app
}
