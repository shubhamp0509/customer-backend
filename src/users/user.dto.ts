/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { AddressDTO } from './address.dto';


export class UserDTO {
  id?: string;

  @ApiProperty({
    example: 'shubhamp05998',
    required: true,
  })
  @IsNotEmpty()
  username: any;

  @ApiProperty({ example: 'Shubham', required: true })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Pathak', required: true })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'Password', required: true })
  @IsNotEmpty()
  password: string;
  @ApiProperty({ example: 'pathakshubham692@gmail.com', required: true })
  @IsNotEmpty()
  email: string;
  @ApiProperty({ example: 'male', required: true })
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ example: new Date().toISOString(), required: true })
  @IsNotEmpty()
  dob: string;
  @ApiProperty({ example: '8380983431', required: true })
  @IsNotEmpty()
  mobile: string;

  @ApiProperty({ example: 'https://exampleimage.com', required: true })
  @IsNotEmpty()
  picture: string;

  @ApiProperty({ type: AddressDTO })
  @IsNotEmpty()
  address:AddressDTO

}

export class Pagination {
  @ApiProperty({
    name: 'limit',
    description: 'Limit for data.',
    type: 'number',
    example: 10,
    required: false,
  })
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @IsOptional()
  page: number;

  @ApiProperty({
    name: 'page',
    description: 'Page of data.',
    type: 'number',
    example: 0,
    required: false,
  })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  limit: number;

}

export class checkUUID {
    @ApiProperty({
      name: 'id',
      required: true,
      description: 'User ID.',
      type: 'string',
    })
    @IsUUID()
    id: string;
  }

