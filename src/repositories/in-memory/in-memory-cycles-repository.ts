import { Cycle, Prisma } from '@prisma/client'
import { CyclesRepository } from '../cycles-repository'
import { randomUUID } from 'crypto'

export class InMemoryCyclesRepository implements CyclesRepository {
  public items: Cycle[] = []

  async create(data: Prisma.CycleUncheckedCreateInput): Promise<Cycle> {
    const { startDate, endDate } = data

    const cycle = {
      id: String(randomUUID()),
      ...data,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      createdAt: new Date(),
    }
    this.items.push(cycle)

    return cycle
  }
}
