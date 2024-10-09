import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  // This handles business logic
  login() {
    return 'This action logs a user in';
  }

  async signUp(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
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
      console.log(error);
      return error;
    }
  }

  test() {
    return 'This action tests the auth service';
  }
}
