import { IsOptional, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class EmployeeQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  department_id?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  division_id?: number;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  pos_id?: number;
}
