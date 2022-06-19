import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
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
