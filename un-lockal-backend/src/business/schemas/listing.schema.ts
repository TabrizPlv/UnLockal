import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({versionKey : false})
export class Listing {
  @Prop()
  productName: string;

  @Prop()
  productDescription: string;

  @Prop()
  productPrice : number;

  @Prop()
  productImages: string[];
}

export const listingSchema = SchemaFactory.createForClass(Listing);
