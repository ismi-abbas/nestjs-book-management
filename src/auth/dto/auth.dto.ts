import { User } from '@prisma/client';
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type CreateUserDto = z.infer<typeof createUserSchema>;
