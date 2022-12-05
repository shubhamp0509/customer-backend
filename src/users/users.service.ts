/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection } from 'typeorm';
import { checkUUID, UserDTO } from './user.dto';
import { UsersRepository } from './user.repository';

@Injectable()
export class UsersService {
    private readonly usersRepository: UsersRepository;

    constructor(private readonly connection: Connection,) {
        this.usersRepository = connection.getCustomRepository(UsersRepository);
    }
    async addUser(user: UserDTO) {
        await this.usersRepository.saveUser(user);
    }
    getUsers({ page = 0, limit = 10 }: { page: number; limit: number }) {
        return this.usersRepository.findAllUsers({ page, limit });
    }

    async updateUser({paramData: { id },user}) {
        console.log(id)
        if (!(await this.usersRepository.findUser({ id }))) {
            throw new NotFoundException('User Not Found!');
          }
          return this.usersRepository.updateUser({ id, userData:user });

     }
     async deleteUser({paramData:{id}}){
        if (!(await this.usersRepository.findUser({ id }))) {
            throw new NotFoundException('User Not Found!');
          }
          return this.usersRepository.softDelete(id)
     }
}
