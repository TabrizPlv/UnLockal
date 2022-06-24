import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { NumberSchemaDefinition } from 'mongoose';

const users = require('../users.json');

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {

    }

    signInLocal(dto: AuthDto) {
        //retrieve user
        const user = users.find(_user => _user.email === dto.email);
        if (!user) throw new UnauthorizedException('Username / Password incorrect');
        if (user.password !== dto.password) throw new UnauthorizedException('Username / Password incorrect');
        
        return this.signUser(user.id, user.email, 'user')
    }
    signUpLocal(dto: AuthDto) {

    }

    signUser(userId: number, email: string, type: string) {
        return this.jwtService.sign({
            sub: userId,
            email,
            type: type,
        });
    }
}
