import { server } from '~/server/server'

const publicRoutes: string[] = ['/api/env']

export default defineEventHandler(async (event) => {
  console.log('New request: ' + event.path)
  const headers = getRequestHeaders(event)
  // Server Initialization
  server()
  // API Middleware
  if (event.path?.startsWith('/api/')) {
    if (publicRoutes.includes(event.path)) {
      console.log('Public route, no authorization required')
      return eventHandler((event) => ({ url: event.path }))
    }
    if (headers['master-api-key'] === process.env.MASTER_API_KEY) {
      console.log('Master API key provided')
      return eventHandler((event) => ({ url: event.path }))
    }
    return (event.node.res.statusCode = 401)
  }
})
