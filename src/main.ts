import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodValidationPipe } from './pipes/zod-validation.pipe';
import { createUserSchema } from './auth/dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ZodValidationPipe(createUserSchema));
  await app.listen(3000);
}
bootstrap();
