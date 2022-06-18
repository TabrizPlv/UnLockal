import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Business } from "./business.schema";

@Schema()
export class Store {
    @Prop()
    storeTitle : string;

    @Prop()
    storeDescription : string;
}

export const storeSchema = SchemaFactory.createForClass(Store);