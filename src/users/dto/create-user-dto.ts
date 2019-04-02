import {ApiModelProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumber} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @ApiModelProperty()
    name: string;

    @IsNotEmpty()
    @ApiModelProperty()
    address: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiModelProperty()
    workProgress: number;

    @IsNotEmpty()
    @ApiModelProperty()
    task: string;
}
