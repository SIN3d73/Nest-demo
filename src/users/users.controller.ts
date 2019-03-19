import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './models/user';
import {CreateUserDto} from './dto/create-user-dto';
import {ApiUseTags} from '@nestjs/swagger';
import {UpdateUserDto} from './dto/update-user-dto';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get('/list')
    findAll(): User[] {
        return this.usersService.getAllUsers();
    }

    @Post()
    addUser(@Body() user: CreateUserDto): User {
        return this.usersService.createUser(user);
    }

    @Get('/:id')
    getUser(@Param('id') id: number): User {
        return this.usersService.getUser(Number(id));
    }

    @Patch()
    updateUser(@Body() user: UpdateUserDto): User {
        return this.usersService.updateUser(user);
    }

    @Delete('/:id')
    removeUser(@Param('id') id: number): User {
        return this.usersService.removeUser(Number(id));
    }
}
