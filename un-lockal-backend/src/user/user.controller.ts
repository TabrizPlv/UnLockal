import { Body, Post, Controller, Request, UseGuards, Get, Req } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';
import { LocalAuthGuard } from 'src/auth/local.auth.guards';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

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

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    return {User: req.user,
            msg: 'User logged in'}
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @Get('/logout')
    logout(@Request() req): any {
      req.session.destroy();
      return { msg: 'The user session has ended' }
    }
}
