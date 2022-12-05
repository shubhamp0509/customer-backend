/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';


export class AddressDTO {
  id?: string;

  @ApiProperty({
    example: 'near poly hub',
    required: true,
  })
  @IsNotEmpty()
  landmark: any;

  @ApiProperty({ example: 'vadgao', required: true })
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'MH', required: true })
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: 'India', required: true })
  @IsNotEmpty()
  country: string;

  @ApiProperty({ example: '123456', required: true })
  @IsNotEmpty()
  zipcode: string;

}

