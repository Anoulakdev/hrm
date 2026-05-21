import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class AddressService {


  async province() {
    try {
      const filePath = path.join(process.cwd(), 'address', 'province.json');
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new InternalServerErrorException('Could not read province data');
    }
  }

  async district() {
    try {
      const filePath = path.join(process.cwd(), 'address', 'district.json');
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new InternalServerErrorException('Could not read district data');
    }
  }

  async village() {
    try {
      const filePath = path.join(process.cwd(), 'address', 'village.json');
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new InternalServerErrorException('Could not read village data');
    }
  }
}
