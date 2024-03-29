import { beforeEach, describe, expect, it } from 'vitest'
import { UsersRepository } from '../../repositories/users-repository'
import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository'
import { CreateCycleService } from './create-cycle'
import { InMemoryCyclesRepository } from '../../repositories/in-memory/in-memory-cycles-repository'
import { CyclesRepository } from '../../repositories/cycles-repository'

let cyclesRepository: CyclesRepository
let usersRepository: UsersRepository
let sut: CreateCycleService

describe('Create Cycle Service', () => {
  beforeEach(() => {
    cyclesRepository = new InMemoryCyclesRepository()
    usersRepository = new InMemoryUsersRepository()
    sut = new CreateCycleService(cyclesRepository, usersRepository)
  })

  it('should be able to create a cycle for a user ', async () => {
    const user = await usersRepository.create({
      name: 'John Doe',
      email: 'JohnDoe@example.com',
    })

    const cycle = await sut.execute({
      userId: user.id,
      startDate: '2024-01-01',
      endDate: '2024-04-01',
    })

    expect(cycle).toEqual(expect.any(Object))
  })
})
