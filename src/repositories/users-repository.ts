import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  createUser: (user: Prisma.UserCreateInput) => Promise<User>
}
