import {ApiModelProperty} from '@nestjs/swagger';
import {IsAlphanumeric, IsNotEmpty, IsNumber} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    @ApiModelProperty()
    name: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    @ApiModelProperty()
    address: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiModelProperty()
    workProgress: number;

    @IsNotEmpty()
    @IsAlphanumeric()
    @ApiModelProperty()
    task: string;
}
