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
  owner?: string;

  @IsString()
  @IsOptional()
  location?: string;

  // Cuando descomentes las fechas en tu modelo:
  // @IsString()
  // @IsOptional()
  // startDate?: string;

  // @IsString()
  // @IsOptional()
  // endDate?: string;
}