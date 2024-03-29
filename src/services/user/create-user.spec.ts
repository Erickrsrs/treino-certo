import { beforeEach, describe, expect, it } from 'vitest'
import { UsersRepository } from '../../repositories/users-repository'
import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository'
import { CreateUserService } from './create-user'

let usersRepository: UsersRepository
let sut: CreateUserService

describe('Create User Service', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new CreateUserService(usersRepository)
  })

  it('should be able to create an user', async () => {
    const user = await sut.execute({
      name: 'John Doe',
      email: 'JohnDoe@example.com',
    })

    expect(user).toEqual(expect.any(Object))
  })
})
