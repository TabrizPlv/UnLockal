import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationParameters } from '../dtos/pagination-paramters.dto';
import { Listing } from './listing.schema';

@Injectable()
export class ListingRepository {
  constructor(
    @InjectModel(Listing.name) private readonly listingModel: Model<Listing>,
  ) {}

  async getListings(paginationParameters : PaginationParameters): Promise<Listing[]> {
    return this.listingModel.find(
        {},
        {},
        {
            lean: true,
            sort: {
                productPrice: -1
            },
            ...paginationParameters
        }
    );
  }
}
