import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { PaginationParameters } from '../listing/dtos/pagination-paramters.dto';
import { Business, BusinessDocument } from './business.schema';
import { Listing } from '../listing/schemas/listing.schema';
import { Store } from './store.schema';

@Injectable()
export class BusinessRepository {
  constructor(
    @InjectModel(Business.name) private readonly businessModel: Model<BusinessDocument>,
  ) {}

  async findBusiness(
    businessFilterQuery: FilterQuery<Business>,
  ): Promise<Business> {
    return this.businessModel.findById(businessFilterQuery);
  }

  async find(businessFilterQuery: FilterQuery<Business>): Promise<Business[]> {
    return this.businessModel.find(businessFilterQuery);
  }

  async createBusiness(business: Business): Promise<Business> {
    const newBusiness = new this.businessModel(business);
    return newBusiness.save();
  }

  async createStore(store: Store): Promise<Business> {
    const newStore = new this.businessModel();
    newStore.store = store;
    return newStore.save();
  }

  async createListing(listing: Listing): Promise<Business> {
    const newListing = new this.businessModel();
    newListing.listings.push(listing);
    return newListing.save();
  }

  async findOneAndUpdateStore(
    businessFilterQuery: FilterQuery<Business>,
    updatedStore: Partial<Store>,
  ): Promise<Business> {
    return this.businessModel.findOneAndUpdate(
      businessFilterQuery,
      updatedStore,
    );
  }

  async findOneAndUpdateListing(
    businessFilterQuery: FilterQuery<Business>,
    updatedListing: Partial<Listing>,
  ): Promise<Business> {
    return this.businessModel.findOneAndUpdate(
      businessFilterQuery,
      updatedListing,
    );
  }
}
