import { User } from '@prisma/client'
import { UsersRepository } from '../../repositories/users-repository'

interface CreateUserRequest {
  name: string
  email: string
}

interface CreateUserResponse {
  user: User
}

export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = await this.usersRepository.createUser({ name, email })

    return { user }
  }
}
