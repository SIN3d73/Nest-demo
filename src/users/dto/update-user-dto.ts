import {ApiModelProperty} from '@nestjs/swagger';
import {IsInt, IsNotEmpty, IsNumber} from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    @IsInt()
    @ApiModelProperty()
    id: number;

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
