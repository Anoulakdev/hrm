import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    if (!process.env.DEFAULT_PASSWORD) {
      throw new InternalServerErrorException('DEFAULT_PASSWORD is not defined');
    }

    const hashedPassword = await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10);
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
    return {
      message: 'User created successfully',
      user,
    };
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
      },
    });
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, username: true },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    if (!user) throw new NotFoundException('User not found');
    return {
      message: 'User updated successfully',
    };
  }

  async remove(id: number) {
    const user = await this.prisma.user.delete({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return {
      message: 'User deleted successfully',
    };
  }
}
