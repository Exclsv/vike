export { vike }

import type { FastifyPluginCallback, FastifyRequest } from 'fastify'
import { createServerResponse } from '../adapters/createServerResponse.js'
import { globalStore } from '../globalStore.js'
import { createHandler } from '../handler.js'
import type { VikeOptions } from '../types.js'

/**
 * Creates a Fastify plugin to handle Vike requests.
 *
 * @param {VikeOptions<FastifyRequest>} [options] - Configuration options for Vike.
 *
 * @returns {FastifyPluginCallback} A Fastify plugin that handles all GET requests and processes them with Vike.
 *
 * @example
 * ```js
 * import fastify from 'fastify'
 * import { vike } from 'vike-node/fastify'
 *
 * const app = fastify()
 * app.register(vike())
 * ```
 */
function vike(options?: VikeOptions<FastifyRequest>): FastifyPluginCallback {
  const handler = createHandler(options)
  return function plugin(instance, _options, done) {
    instance.get('*', async (req, reply) => {
      globalStore.HMRProxy(req.raw, reply.raw)
      const { res, onReadable } = createServerResponse(req.raw)
      ;(async () => {
        const { readable, headers, statusCode } = await onReadable
        reply.code(statusCode)
        reply.headers(headers)
        reply.send(readable)
      })()
      await handler({
        req: req.raw,
        res,
        platformRequest: req,
        next() {
          reply.callNotFound()
        }
      })
    })

    done()
  }
}
