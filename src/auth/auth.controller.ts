import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  /* 
  private authService: AuthService is same as

  authService: AuthService
  constructor(authService: AuthService) {
  this.authService = authService;
  }
  */
  constructor(private authService: AuthService) {}

  @Get('test')
  test() {
    return this.authService.test();
  }

  @Post('signup')
  signUp(@Body() user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    console.log(user.email);
    return this.authService.signUp(user);
  }

  @Post('login')
  login() {
    return this.authService.login();
  }
}
