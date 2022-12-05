/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { checkUUID, Pagination, UserDTO } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('User')
export class UsersController {

    constructor(private userService:UsersService){}

    @Post()
    @ApiOperation({
      summary: 'Add User',
      description: 'Create New User.',
    })
    async addUser(@Body() userData:UserDTO ) {
      return this.userService.addUser(userData);
    }

    @Get()
    @ApiOperation({
      summary: 'Get Users',
      description: 'Get All Users',
    })
    async getUser(@Query() { page, limit }: Pagination) {
      return this.userService.getUsers({ page, limit });
    }

    @Put(':id')
    @ApiOperation({
      summary: 'Update User',
      description: 'Update existing User.',
    })
    async updateUser(@Param() paramData: checkUUID, @Body() user: UserDTO) {
      return this.userService.updateUser({ paramData, user });
    }

    @Delete(':id')
    @ApiOperation({summary:'Delete User',description:'Delete User'})
    async deleteUser(@Param() paramData:checkUUID){
      return this.userService.deleteUser({paramData})
    }


}
