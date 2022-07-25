import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {Document} from 'mongoose';
import { Listing } from 'src/business/listing/schemas/listing.schema';
import { User } from 'src/user/schemas/user.schema';

export type OrderDocument = Order & Document;

@Schema({ versionKey: false })
export class Order {
  @Prop()
  product: Listing;

  @Prop()
  quantity: Number;

  //buyer and seller will be tracked by their email
  @Prop()
  seller: string;

  @Prop()
  buyer: string;
  
  @Prop()
  status: string;
}

export const orderSchema = SchemaFactory.createForClass(Order);
