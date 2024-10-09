import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  getUserDetails(userId: string) {
    const user = this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return 'User not found';
    }

    return user;
  }

  updateUserDetails(userId: string, data: User) {
    this.prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }

  deleteUser(userId: string) {
    this.prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
