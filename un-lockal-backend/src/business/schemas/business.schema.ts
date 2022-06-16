import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BusinessDocument = Business & Document; 

@Schema()
export class Business {
    @Prop()
    username : string;

    @Prop()
    storeTitle : string;

    @Prop()
    storeDescription : string;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);