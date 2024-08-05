import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskDto } from './dto/create-task.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: TaskDto) {
    data.authorId = Number(data.authorId);
    return this.prisma.task.create({
      data,
    });
  }

  async tasks(id: number) {
    return this.prisma.task.findMany({
      where: { authorId: id },
    });
  }

  async delete(id: Prisma.TaskWhereUniqueInput) {
    return this.prisma.task.delete({
      where: id,
    });
  }
}
