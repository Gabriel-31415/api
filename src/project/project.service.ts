import { Injectable } from '@nestjs/common';
import { ProjectDto } from './dto/create-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Project } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ProjectDto) {
    data.dueDate = new Date(data.dueDate);
    return this.prisma.project.create({
      data,
    });
  }

  async projects() {
    return this.prisma.project.findMany({});
  }

  async project(id: Prisma.ProjectWhereUniqueInput) {
    return this.prisma.project.findFirstOrThrow({
      where: id,
    });
  }

  async updateProject(params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }): Promise<Project> {
    const { where, data } = params;
    console.log(data);
    return this.prisma.project.update({
      where,
      data,
    });
  }

  async delete(id: Prisma.ProjectWhereUniqueInput) {
    return this.prisma.project.delete({
      where: id,
    });
  }
}
