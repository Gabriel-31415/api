import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async projects() {
    return this.projectService.projects();
  }

  @Post()
  async create(@Body() data: ProjectDto) {
    return this.projectService.create(data);
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.projectService.project({ id });
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Patch(':id')
  async update(
    @Body() body: ProjectDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.projectService.updateProject({
      where: { id },
      data: body,
    });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.projectService.delete({ id });
  }
}
