import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.safeParse(value);

      if (parsedValue.error) {
        throw new BadRequestException(parsedValue.error.flatten().fieldErrors);
      }

      return parsedValue;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
