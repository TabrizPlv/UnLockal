import { Injectable } from '@nestjs/common';
import { Business } from '../schemas/business.schema';
import { BusinessRepository } from '../schemas/business.repository';
import { UpdateStoreDto } from '../dtos/updateStore.dto';
import { Listing } from '../schemas/listings.schema';
import { Store } from '../schemas/store.schema';
import { ObjectId } from 'mongoose';
import { UpdateListingDto } from '../dtos/updateListing.dto';

@Injectable()
export class BusinessService {
  constructor(private readonly businessRepository : BusinessRepository) {}

  async findBusiness(userId : string) : Promise<Business> {
    return this.businessRepository.findBusiness({"_id": {userId}});
  }

  async getAllBusinesses() : Promise<Business[]> {
    return this.businessRepository.find({});
  }

  async createBusiness(business : Business) : Promise<Business> {
    return this.businessRepository.createBusiness(business);
  }

  async createStore(storeTitle : string, storeDescription : string) : Promise<Business> {
    return this.businessRepository.createStore({
      storeTitle : storeTitle,
      storeDescription : storeDescription
    });
  }

  async createListing(productDescription : string) : Promise<Business> {
    return this.businessRepository.createListing({productDescription});
  }

  async updateStoreDetails(id : ObjectId, update : UpdateStoreDto) : Promise<Business> {
    return this.businessRepository.findOneAndUpdateStore({id}, update);
  }

  async updateListing(id : ObjectId, update : UpdateListingDto) : Promise<Business> {
    return this.businessRepository.findOneAndUpdateListing({id}, update);
  }
}
