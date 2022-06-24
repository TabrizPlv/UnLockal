import { Injectable } from "@nestjs/common";
import { PaginationParameters } from "../dtos/pagination-paramters.dto";
import { Listing } from "../schemas/listing.schema";
import { ListingRepository } from "../schemas/listing.repository";

@Injectable()
export class ListingService {
    constructor(private readonly listingRepository: ListingRepository) {}

    async getListings(paginationParameters : PaginationParameters): Promise<Listing[]> {
        return this.listingRepository.getListings(paginationParameters);
    }
}