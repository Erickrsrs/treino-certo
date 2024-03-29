import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findById(id: string): Promise<User | null> {
    return this.items.find((user) => user.id === id) || null
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.items.find((user) => user.email === email) || null
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: String(randomUUID()),
      ...data,
      createdAt: new Date(),
    }
    this.items.push(user)

    return user
  }
}
