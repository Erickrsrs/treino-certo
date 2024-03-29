import fastify from 'fastify'
import { ZodError } from 'zod'

export const app = fastify()

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    reply.status(400).send({
      message: 'Validation error',
      issues: error.errors.map((err) => err.message),
    })
  }

  return reply.status(500).send({
    message: 'Internal server error',
  })
})
