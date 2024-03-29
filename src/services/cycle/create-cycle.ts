import { UsersRepository } from './../../repositories/users-repository'
import { Cycle } from '@prisma/client'
import { CyclesRepository } from '../../repositories/cycles-repository'
import { ResourceNotFoundError } from '../@errors/resource-not-found-error'

interface CreateCycleRequest {
  userId: string
  startDate: string
  endDate: string
}

interface CreateCycleResponse {
  cycle: Cycle
}

export class CreateCycleService {
  constructor(
    private cyclesRepository: CyclesRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    userId,
    startDate,
    endDate,
  }: CreateCycleRequest): Promise<CreateCycleResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    const cycle = await this.cyclesRepository.create({
      userId: user.id,
      startDate,
      endDate,
    })

    return { cycle }
  }
}
