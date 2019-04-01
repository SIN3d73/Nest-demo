import {ApiModelProperty} from '@nestjs/swagger';
import {IsAlphanumeric, IsInt, IsNotEmpty, IsNumber} from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    @IsInt()
    @ApiModelProperty()
    id: number;

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
