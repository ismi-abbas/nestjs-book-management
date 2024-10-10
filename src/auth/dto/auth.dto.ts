import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string({
    message: 'Email is required',
  }),
  password: z.string({
    message: 'Password is required',
  }),
  name: z.string({
    message: 'Name is required',
  }),
});

export const loginSchema = z.object({
  email: z.string({
    message: 'Email is required',
  }),
  password: z.string({
    message: 'Password is required',
  }),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type LoginDto = z.infer<typeof loginSchema>;
