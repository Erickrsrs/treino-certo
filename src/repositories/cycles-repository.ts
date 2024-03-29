import { Cycle, Prisma } from '@prisma/client'

export interface CyclesRepository {
  create: (data: Prisma.CycleUncheckedCreateInput) => Promise<Cycle>
}
