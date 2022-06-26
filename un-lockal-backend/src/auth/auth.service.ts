import { BadRequestException, ConsoleLogger, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ExistingUserDto } from 'src/user/dtos/existing-user.dto';
import { NewUserDto } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async register(user: Readonly<NewUserDto>): Promise<UserDetails | any> {
    const { email, password } = user;
    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) throw new BadRequestException('Email already taken!');
    const hashedPassword = await this.hashPassword(password);
    const newUser = await this.userService.create(email, hashedPassword);
    return this.userService._getUserDetails(newUser);
  }

  async doesPasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDetails | null> {
    const user = await this.userService.findByEmail(email);
    const doesUserExist = !!user;
    if (!doesUserExist) throw new BadRequestException("Account does not exist!");

    const doesPasswordMatch = await this.doesPasswordMatch(
      password,
      user.password,
    );

    if (!doesPasswordMatch) {throw new BadRequestException("Wrong password!")};

    return this.userService._getUserDetails(user);
  }

  async login(
    existingUser: ExistingUserDto,
  ): Promise<{ token: string } | any> {
    const { email, password } = existingUser;
    const user = await this.validateUser(email, password);
    if (!user) return 'Wrong email or password!';
    const jwt = await this.jwtService.signAsync({ user });
    return { token: jwt };
  }
  
}
