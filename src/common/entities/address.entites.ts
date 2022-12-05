/* eslint-disable prettier/prettier */
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Roles } from "../types/roles";
import { BaseEntity } from "./constants/base-entity";
import { TABLE_NAME } from "./constants/constants";
import { UsersEntity } from "./user.entities";


@Entity(TABLE_NAME.ADDRESS)
export class AddressEntity extends BaseEntity {
  @Column({ type: 'text' })
  landmark!: string;

  @Column({ type: 'text' })
  city!: string;

  @Column({ type: 'text' })
  state!: string;

  @Column({ type: 'text' })
  country!: string;

  @Column({ type: 'text' })
  zipcode!: string;

//   @Column({ nullable:true })
//   userId?: string;
//   @OneToOne(() => UsersEntity, {cascade:['insert','update','remove']})
//   @JoinColumn({ name: 'userId' })
//   user: UsersEntity;

}