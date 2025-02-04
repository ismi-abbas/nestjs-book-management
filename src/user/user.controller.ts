import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':userId')
  getUserDetails(@Param('userId') userId: string) {
    return this.userService.getUserDetails(userId);
  }

  @Post(':userId')
  updateUserDetails(@Param('userId') userId: string, @Body() data: User) {
    return this.userService.updateUserDetails(userId, data);
  }
}
