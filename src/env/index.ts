import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.number().default(3000),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) throw new Error(_env.error.message)

export const env = _env.data
