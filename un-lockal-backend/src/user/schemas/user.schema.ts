import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import mongoose, {Document} from 'mongoose';
import { Business } from '../../business/schemas/business.schema';

export type UserDocument = User & Document;

@Schema({ versionKey: false })
export class User {

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  business: Business;
}

export const userSchema = SchemaFactory.createForClass(User);
