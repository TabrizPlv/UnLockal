import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Business } from '../../business/schemas/business.schema';

@Schema({versionKey : false})

export class User {
  @Prop({required: true, unique : true})
  email: string;

  @Prop({required: true})
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Business'})
  business: Business
}

export const userSchema = SchemaFactory.createForClass(User);

export interface User extends mongoose.Document {
  _id : string,
  email : string,
  password : string,
}
