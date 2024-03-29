import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    const newUser = {
      id: String(randomUUID()),
      ...user,
      createdAt: new Date(),
    }
    this.items.push(newUser)

    return newUser
  }
}
