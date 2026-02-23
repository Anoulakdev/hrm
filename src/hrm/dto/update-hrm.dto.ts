import { PartialType } from '@nestjs/mapped-types';
import { CreateHrmDto } from './create-hrm.dto';

export class UpdateHrmDto extends PartialType(CreateHrmDto) {}
