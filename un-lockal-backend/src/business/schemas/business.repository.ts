import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Business, BusinessDocument } from "./business.schema";

@Injectable()
export class BusinessRepository {
    constructor(@InjectModel(Business.name) private businessModel : Model<BusinessDocument>) {}

    async findBusiness(businessFilterQuery : FilterQuery<Business>) : Promise<Business> {
        return this.businessModel.findOne(businessFilterQuery);
    }

    async find(businessFilterQuery : FilterQuery<Business>) : Promise<Business[]> {
        return this.businessModel.find(businessFilterQuery);
    }

    async create(business : Business) : Promise<Business> {
        const newBusiness = new this.businessModel(business);
        return newBusiness.save();
    }

    async findOneAndUpdate(businessFilterQuery : FilterQuery<Business>, updatedBusiness : Partial<Business>) : Promise<Business> {
        return this.businessModel.findOneAndUpdate(businessFilterQuery, updatedBusiness);
    }
}
