import { Injectable } from '@nestjs/common';
import { Business } from '../schemas/business.schema';
import { BusinessRepository } from '../schemas/business.repository';
import { CreateStoreDto } from '../dtos/CreateStore.dto';

@Injectable()
export class BusinessService {
  constructor(private readonly businessRepository : BusinessRepository) {}

  async findBusiness(username : string) : Promise<Business> {
    return this.businessRepository.findBusiness({username});
  }

  async getAllBusinesses() : Promise<Business[]> {
    return this.businessRepository.find({});
  }

  async createBusiness(username : string, storeTitle : string, storeDescription : string) : Promise<Business> {
    return this.businessRepository.create({
      username : username,
      storeTitle : storeTitle,
      storeDescription : storeDescription
    });
  }

  async updateBusiness(username : string, update : CreateStoreDto) : Promise<Business> {
    return this.businessRepository.findOneAndUpdate({username}, update);
  }
}
