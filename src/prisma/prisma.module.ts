import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Enable prisma module in all our app
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
