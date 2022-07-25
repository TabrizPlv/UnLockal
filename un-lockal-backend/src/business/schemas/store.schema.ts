import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Store {
    @Prop()
    storeTitle : string;

    @Prop()
    storeDescription : string;

    @Prop()
    storeImageURL : string;

    @Prop()
    category: string;
}

export const storeSchema = SchemaFactory.createForClass(Store);