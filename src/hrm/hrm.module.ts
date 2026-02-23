import { Module } from '@nestjs/common';
import { HrmService } from './hrm.service';
import { HrmController } from './hrm.controller';

@Module({
  controllers: [HrmController],
  providers: [HrmService],
})
export class HrmModule {}
