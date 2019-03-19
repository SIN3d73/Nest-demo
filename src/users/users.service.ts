import {ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {User} from './models/user';
import {CreateUserDto} from './dto/create-user-dto';
import {UpdateUserDto} from './dto/update-user-dto';

@Injectable()
export class UsersService {

    private userList: User[] = require('./userData.json');

    getAllUsers(): User[] {
        return this.userList.filter(value => value.active);
    }

    getUser(id: number): User {
        const result = this.userList.find(value => value.id === id && value.active);
        if (!result) {
            throw new NotFoundException([{
                constraints: {
                    userNotFound: 'userNotFound',
                },
            }]);
        }
        return result;
    }

    updateUser(user: UpdateUserDto): User {
        const index = this.userList.findIndex(value => value.id === user.id);
        if (index < 0) {
            return null;
        }
        return this.userList[index] = {
            ...this.userList[index],
            email: user.email,
            login: user.login,
        };
    }

    createUser(user: CreateUserDto): User {
        const id = this.userList[this.userList.length - 1].id + 1;
        const result: User = {
            id,
            login: user.login,
            email: user.email,
            active: true,
        };
        this.userList.push(result);
        return result;
    }

    removeUser(id: number): User {
        const index = this.userList.findIndex(value => value.id === id);
        this.userList[index].active = false;
        return this.userList[index];
    }
}
