import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StoreDto } from 'src/business/dtos/store.dto';
import { Business } from 'src/business/schemas/business.schema';
import { BusinessService } from 'src/business/services/business.service';
import { ListingDto } from 'src/business/dtos/listing.dto';
import { ObjectId } from 'mongoose';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Get('/search/:userId')
  getStore(@Param('userId') userId: string) {
    const user = this.businessService.findBusiness(userId);
    if (user) {
      return user;
    } else {
      throw new HttpException('Store not found!', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('create-listing')
  @UsePipes(ValidationPipe)
  createListing(@Body() listingDto: ListingDto) {
    this.businessService.createListing(
      listingDto.productName,
      listingDto.productDescription,
      listingDto.productPrice,
      listingDto.productImages,
    );
  }

  @Post('create-store')
  @UsePipes(ValidationPipe)
  createStore(@Body() StoreDto: StoreDto) {
    this.businessService.createStore(
      StoreDto.storeTitle,
      StoreDto.storeDescription,
      StoreDto.storeImageURL,
    );
  }

  @Post('create-business')
  @UsePipes(ValidationPipe)
  createBusiness(@Body() business: Business) {
    this.businessService.createBusiness(business);
  }

  @Get()
  getAllStores() {
    return this.businessService.getAllBusinesses();
  }

  // @Patch('update')
  // async updateStore(@Body() updateStoreDto: UpdateStoreDto): Promise<Business> {
  //   return this.businessService.updateStoreDetails(updateStoreDto);
  // }
}
