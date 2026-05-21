import { Controller, Get } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) { }

  @Get('province')
  province() {
    return this.addressService.province();
  }

  @Get('district')
  district() {
    return this.addressService.district();
  }

  @Get('village')
  village() {
    return this.addressService.village();
  }
}
