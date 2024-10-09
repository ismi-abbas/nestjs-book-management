import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({})
export class AuthController {
  /* 
  private authService: AuthService is same as

  authService: AuthService
  constructor(authService: AuthService) {
  this.authService = authService;
  }
  */
  constructor(private authService: AuthService) {}

  @Get('auth/test')
  test() {
    return this.authService.test();
  }

  @Post('auth/signup')
  signUp() {
    return this.authService.signUp();
  }
}
