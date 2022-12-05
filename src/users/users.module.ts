/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  imports: [],
  controllers: [UsersController],
})
export class UsersModule {}
