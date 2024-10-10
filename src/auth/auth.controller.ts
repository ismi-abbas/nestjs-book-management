import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';
import { AuthService } from './auth.service';
import { CreateUserDto, createUserSchema, loginSchema } from './dto';

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
  @UsePipes(new ZodValidationPipe(createUserSchema))
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('login')
  @UsePipes(new ZodValidationPipe(loginSchema))
  login(@Body() loginDto: CreateUserDto) {
    return this.authService.login(loginDto);
  }
}
