import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './dtos/user-details.interface';
import { UserListing } from './dtos/user-listing.interface';
import { Store } from 'src/business/schemas/store.schema';
import { Listing } from 'src/business/listing/schemas/listing.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //returns user Id and email
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }

  //returns user Id,email,listings
  // mainly used for marketplace
  @Get(':id/user-listing')
  getUserListing(@Param('id') id :string): Promise<UserListing | null> {
    return this.userService.getUserListing(id);
  }


  @Get(':id/store')
  getStore(@Param('id') id: string): Promise<Store | null> {
    return this.userService.getStore(id);
  }


  //returns all user listings
  @Get(':id/get-listings')
  getListings(@Param('id') id: string): Promise<Listing[] | null> {
    return this.userService.getAllListing(id);
  }

  @Put(':id/create-store')
  createStore(@Param('id') id: string, @Body() store: Store): Promise<any> {
    return this.userService.createStore(id, store);
  }

  @Post(':id/add-listing')
  addListing(@Param('id') id: string, @Body() listing: Listing): Promise<any> {
    return this.userService.createListing(id, listing);
  }

  @Get(':id/have-store')
  haveStore(@Param('id') id: string): Promise<boolean> {
    return this.userService.haveStore(id);
  }

  @Get(':id/listings')
  getListings(@Param('id') id: string): Promise<Listing[] | null> {
    return this.userService.getAllListing(id);
  }

}
