import { IsEmail, IsNotEmpty } from "class-validator";

export class ExistingUserDto {
    @IsEmail()
    @IsNotEmpty()
    email : string;
    @IsNotEmpty()
    password : string;
}