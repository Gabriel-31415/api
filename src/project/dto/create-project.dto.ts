import { IsNotEmpty, IsString } from 'class-validator';

export class ProjectDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  dueDate: Date;
}
