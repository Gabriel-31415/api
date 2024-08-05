import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNumberString()
  authorId: number;
}
