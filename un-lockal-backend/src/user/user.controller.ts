import { Body, Post, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //post /signup
  @Post('/signup')
  async addUser(
    @Body('password') userPassword : string,
    @Body('email') userEmail : string
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
    const result = await this.userService.insertUser(userEmail, hashedPassword);
    return {
      msg: 'User successfully registered',
      userId: result.id,
      userEmail: result.email,
    };
  }
}
