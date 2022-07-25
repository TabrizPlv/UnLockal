import { Injectable } from '@nestjs/common';
import { Business } from '../schemas/business.schema';
import { BusinessRepository } from '../schemas/business.repository';
import { UpdateStoreDto } from '../dtos/updateStore.dto';
import { ObjectId } from 'mongoose'
import { UpdateListingDto } from '../listing/dtos/updateListing.dto';

@Injectable()
export class BusinessService {
  constructor(private readonly businessRepository: BusinessRepository) {}

  async findBusiness(userId: string): Promise<Business> {
    return this.businessRepository.findBusiness({ _id: { userId } });
  }

  async getAllBusinesses(): Promise<Business[]> {
    return this.businessRepository.find({});
  }

  async createBusiness(business: Business): Promise<Business> {
    return this.businessRepository.createBusiness(business);
  }

  async createStore(
    storeTitle: string,
    storeDescription: string,
    storeImageURL: string,
    category: string
  ): Promise<Business> {
    return this.businessRepository.createStore({
      storeTitle: storeTitle,
      storeDescription: storeDescription,
      storeImageURL: storeImageURL,
      category: category
    });
  }

  async createListing(
    productName: string,
    productDescription: string,
    productPrice: number,
    productImages: string[],
  ): Promise<Business> {
    return this.businessRepository.createListing({
      productName,
      productDescription,
      productPrice,
      productImages,
    });
  }

  async updateStoreDetails(
    id: ObjectId,
    update: UpdateStoreDto,
  ): Promise<Business> {
    return this.businessRepository.findOneAndUpdateStore({ id }, update);
  }

  async updateListing(
    id: ObjectId,
    update: UpdateListingDto,
  ): Promise<Business> {
    return this.businessRepository.findOneAndUpdateListing({ id }, update);
  }
}
