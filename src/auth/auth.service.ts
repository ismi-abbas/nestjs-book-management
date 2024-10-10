import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  // This handles business logic
  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      return 'User not found';
    }

    if (user.password !== loginDto.password) {
      return 'Invalid password';
    }
  }

  async signUp(data: CreateUserDto) {
    try {
      const userCreated = await this.prisma.user.create({
        data: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      });

      return userCreated;
    } catch (error) {
      return error;
    }
  }

  test() {
    return 'This action tests the auth service';
  }
}
