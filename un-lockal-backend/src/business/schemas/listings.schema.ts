import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Business } from "./business.schema";

@Schema()
export class Listing {
    @Prop()
    productDescription : string;
}

export const listingSchema = SchemaFactory.createForClass(Listing);