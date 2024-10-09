import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  // This handles business logic
  login() {
    return 'This action logs a user in';
  }

  signUp() {
    return {
      message: 'User has been created successfully',
    };
  }

  test() {
    return 'This action tests the auth service';
  }
}
