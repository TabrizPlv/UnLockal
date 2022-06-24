import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StoreDto } from 'src/business/dtos/store.dto';
import { Business } from 'src/business/schemas/business.schema';
import { BusinessService } from 'src/business/services/business.service';
import { ListingDto } from 'src/business/listing/dtos/listing.dto';
import { PaginationParameters } from 'src/business/listing/dtos/pagination-paramters.dto';
import { Listing } from 'src/business/listing/schemas/listing.schema';

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

  @Get('all-listings')
  async getListings(
    @Query() getListingParameters: PaginationParameters,
  ): Promise<Listing[]> {
    return this.businessService.getListings(getListingParameters);
  }

  @Get('listing-count')
  async countListings() : Promise<number> {
    return this.businessService.countListings();
  }
}
