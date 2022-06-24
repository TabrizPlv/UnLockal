import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

const users = require('../users.json');

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}
    
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.getUser(email);
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        if (user && passwordValid){
            return {
                userId: user.id,
                Email: user.email
            };
        }
        return null;
    }
}
