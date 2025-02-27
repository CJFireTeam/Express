import { IsString, IsOptional } from 'class-validator';

export class CreateAgendaDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  startDate!: string;

  @IsString()
  endDate!: string;
}