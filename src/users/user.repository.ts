/* eslint-disable prettier/prettier */
import {
    UsersEntity,
  } from 'src/common/entities';
  import { EntityManager, EntityRepository, In, Repository } from 'typeorm';
  import { UserDTO } from './user.dto';
  
  @EntityRepository(UsersEntity)
  export class UsersRepository extends Repository<UsersEntity> {
    async saveUser(userData: UserDTO) {
      return this.save(userData);
    }
  
    async saveMultipleUser(manager: EntityManager, userData: UserDTO[]) {
      return manager.save(UsersEntity, userData);
    }
  
 
  
    async findUser({ id }: { id: string }) {
      return this.findOne({ where: { id } });
    }
  
    async findUserByEmail({ email }: { email: string }) {
      return this.findOne({ where: { email } });
    }
  
    async updateUser({ id, userData }: { id: string; userData: UserDTO }) {
      return this.update(id, userData);
    }
  
    async findAllUsers({ page, limit }) {
      return this.find({
        skip: +page * +limit,
        take: +limit,
        relations:['address']
      });
    }
  
    async deleteUser({ id }) {
      return this.delete({ id });
    }
  
  
 
  
    // async findUsersByName(names) {
    //   return this.find({
    //     where: { name: In(names) },
    //   });
    // }
  }
  