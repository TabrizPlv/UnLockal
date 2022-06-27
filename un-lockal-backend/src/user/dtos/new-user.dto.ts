import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty } from "class-validator";

export class NewUserDto {
    @IsEmail()
    @IsNotEmpty()
    @Prop({required : true, unique : true})
    email : string;

    @IsNotEmpty()
    @Prop({required : true})
    password : string;
}