/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        password: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Username Not Found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Password Not Match');
    }

    const { password: _, ...result } = user;
    return result;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    const expiresIn = '1h';

    return {
      token: this.jwtService.sign(payload, { expiresIn }),
      user,
    };
  }
}
