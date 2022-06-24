import {Controller, Get, Query} from '@nestjs/common';
import { PaginationParameters } from '../dtos/pagination-paramters.dto';
import { Listing } from '../schemas/listing.schema';
import { ListingService } from '../services/listing.service';

@Controller('listings')
export class ListingController {
    constructor(private readonly listingService : ListingService) {}

    @Get()
    async getListings(@Query() getListingParameters : PaginationParameters) : Promise<Listing[]> {
        return this.listingService.getListings(getListingParameters);
    }
}