import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Store } from './store.schema';
import { Listing } from '../listing/schemas/listing.schema';

export type BusinessDocument = Business & Document;

@Schema({versionKey : false})
export class Business {
  @Prop()
  store: Store;

  @Prop()
  listings: Listing[];
}

export const businessSchema = SchemaFactory.createForClass(Business);
