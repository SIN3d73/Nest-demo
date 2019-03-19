import { ApiModelProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiModelProperty()
    email: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    @ApiModelProperty()
    login: string;
}
