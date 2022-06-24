import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Listing } from "./schemas/listing.schema";
import { ListingController } from "./controller/listing.controller";
import { ListingService } from "./services/listing.service";
import { ListingRepository } from "./schemas/listing.repository";
import { listingSchema } from "./schemas/listing.schema";

@Module({
    imports:[MongooseModule.forFeature([{name : Listing.name, schema: listingSchema}])],
    providers:[ListingService, ListingRepository],
    controllers:[ListingController],
})
export class ListingModule{}