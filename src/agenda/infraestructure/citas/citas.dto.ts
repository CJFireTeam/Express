import { IsString, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCitaDto {
    @IsString({ message: 'El título debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El título es obligatorio' })
    titulo!: string;

    @IsString({ message: 'La descripción debe ser una cadena de texto' })
    @IsOptional()
    descripcion?: string;

    @IsDateString({}, { message: 'La fecha debe tener un formato de fecha válido (YYYY-MM-DD)' })
    fecha!: string;

    @IsString({ message: 'La hora debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'La hora es obligatoria' })
    hora!: string;

    @IsString({ message: 'La ubicación debe ser una cadena de texto' })
    @IsOptional()
    ubicacion?: string;
}
