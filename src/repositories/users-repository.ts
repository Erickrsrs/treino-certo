import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  create: (user: Prisma.UserCreateInput) => Promise<User>
}
