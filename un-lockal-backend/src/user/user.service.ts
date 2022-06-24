import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModel: Model<User>) {}

    async insertUser(Email : string, password : string) {
        const email = Email.toLowerCase();
        const newUser = new this.userModel({
            email,
            password
        });
        await newUser.save();
        return newUser;
    }
    async getUser(Email: string) {
        const email = Email.toLowerCase();
        const user = await this.userModel.findOne({ email });
        return user
    }
    
}
