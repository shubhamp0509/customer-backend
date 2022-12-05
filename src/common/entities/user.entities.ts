/* eslint-disable prettier/prettier */
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { Roles } from "../types/roles";
import { AddressEntity } from "./address.entites";
import { BaseEntity } from "./constants/base-entity";
import { TABLE_NAME } from "./constants/constants";


@Entity(TABLE_NAME.USERS)
export class UsersEntity extends BaseEntity {
  @Column({ type: 'text' })
  firstName!: string;

  @Column({ type: 'text' })
  lastName!: string;

  @Index({ unique: true })
  @Column({ type: 'text' })
  email!: string;

  @Index({ unique: true })
  @Column({ type: 'text' })
  username!: string;

  @Column({ type: 'text' })
  dob!: string;

  @Column({ type: 'text' })
  mobile!: string;

  @Column({ type: 'enum', enum: Roles, default: Roles.User })
  role!: Roles;

  @Column({ type: 'text' })
  gender!: string;

  @Column({ type: 'text' })
  password!: string;

  @Column({ nullable:true })
  addressId?: string;
  @ManyToOne(() => AddressEntity, {cascade:['insert','update','remove']})
  @JoinColumn({ name: 'addressId' })
  @JoinTable({})
  address: AddressEntity;

  @Column({ type: 'text', nullable: true })
  picture?: string;
}