import {ApiModelProperty} from '@nestjs/swagger';
import {IsAlphanumeric, IsEmail, IsInt, IsNotEmpty} from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    @IsInt()
    @ApiModelProperty()
    id: number;

    @IsNotEmpty()
    @IsEmail()
    @ApiModelProperty()
    email: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    @ApiModelProperty()
    login: string;

}
