import { FastifyInstance } from 'fastify'
import { register } from './register-controller'
import { authenticate } from './authenticate-controller'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { profile } from './profile-controller'
import { refresh } from './refresh-controller'



export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.get('/health', async () => {
    return { status: 'OK' }
  })
  app.get('/me', { onRequest: [verifyJwt] }, profile)
  app.patch('/token/refresh', refresh)
}