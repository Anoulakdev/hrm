import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { HrmService } from './hrm.service';
// import { CreateHrmDto } from './dto/create-hrm.dto';
// import { UpdateHrmDto } from './dto/update-hrm.dto';
import { EmployeeQueryDto } from './dto/employee.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('hrms')
export class HrmController {
  constructor(private readonly hrmService: HrmService) {}

  @Get('department')
  department() {
    return this.hrmService.department();
  }

  @Get('division')
  division() {
    return this.hrmService.division();
  }

  @Get('office')
  office() {
    return this.hrmService.office();
  }

  @Get('unit')
  unit() {
    return this.hrmService.unit();
  }

  @Get('positiongroup')
  positiongroup() {
    return this.hrmService.positiongroup();
  }

  @Get('positioncode')
  positioncode() {
    return this.hrmService.positioncode();
  }

  @Get('position')
  position() {
    return this.hrmService.position();
  }

  @Get('employee')
  async getEmployees(@Query() query: EmployeeQueryDto) {
    return this.hrmService.employee(query);
  }
}
