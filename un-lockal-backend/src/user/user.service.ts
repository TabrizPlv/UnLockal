import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Store } from 'src/business/schemas/store.schema';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { UserDetails } from './user-details.interface';
import { Listing } from 'src/business/listing/schemas/listing.schema';
import { BusinessDocument } from 'src/business/schemas/business.schema';
import { StoreDto } from 'src/business/dtos/store.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  _getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user._id,
      email: user.email,
    };
  }
  async create(email: string, hashedPassword: string): Promise<UserDocument> {
    const newUser = new this.userModel({ email, password: hashedPassword, business: {store:{}, listings:[]}});
    return newUser.save();
  }

  async findByEmail(email: string) : Promise<UserDocument | null> {
    return this.userModel.findOne({email}).exec();
  }

  async findById(id: string) : Promise<UserDetails | null> {
    const user = await this.userModel.findById(id).exec();
    if(!user) {
        return null;
    } else {
        return this._getUserDetails(user);
    }
  }
  async insertUser(Email : string, password : string) {
      const email = Email.toLowerCase();
      const newUser = new this.userModel({
          email,
          password
      });
      await newUser.save();
      return newUser;
  }

  async getUser(Email: string) {
      const input = Email.toLowerCase();
      const user = await this.userModel.findOne({ input });
      return user;
  }

  async createStore(id: string, inputStore: Store) {
    const user = await this.userModel.findById(id);
    const biz = user.business;
    biz.store = inputStore;
    await user.save();
  }

  async getStore(id: string) {
    const user = await this.userModel.findById(id);
    return user.business.store;
  }

  async createListing(id: string, inputListing : Listing) {
    const user = await this.userModel.findById(id);
    user.business.listings.push(inputListing);
    await user.save();
  }

  async getAllListing(id : string) {
    const user = await this.userModel.findById(id);
    return user.business.listings;
  }
}
