import {Injectable, NotFoundException} from '@nestjs/common';
import {User} from './models/user';
import {CreateUserDto} from './dto/create-user-dto';
import {UpdateUserDto} from './dto/update-user-dto';

@Injectable()
export class UsersService {

    private userList: User[] = require('./userData.json');

    getAllUsers(): User[] {
        return this.userList.filter(value => value.isActive);
    }

    getUser(id: number): User {
        const result = this.userList.find(value => value.id === id && value.isActive);
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
        const {name, address, task, workProgress} = user;
        return this.userList[index] = {
            ...this.userList[index],
            name,
            address,
            workProgress,
            task,
        };
    }

    createUser(user: CreateUserDto): User {
        const id = this.userList[this.userList.length - 1].id + 1;
        const {name, address, task, workProgress} = user;
        const result: User = {
            id,
            name,
            address,
            task,
            workProgress,
            isActive: true,
            isNew: true,
        };
        this.userList.push(result);
        return result;
    }

    removeUser(id: number): User {
        const index = this.userList.findIndex(value => value.id === id);
        this.userList[index].isActive = false;
        return this.userList[index];
    }
}
