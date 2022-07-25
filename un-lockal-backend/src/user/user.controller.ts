import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './dtos/user-details.interface';
import { Store } from 'src/business/schemas/store.schema';
import { Listing } from 'src/business/listing/schemas/listing.schema';
import { User } from './schemas/user.schema';
import { Document } from 'mongoose';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  //returns user Id,email and business
  @Get(':id/get-userdetails')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
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

  @Get('getAllUsersWithListings')
  getAllUserWithListings(@Param('id') id: string): Promise<(User & Document)[]> {
    return this.userService.getAllUserWithListings();
  }

  @Get('filter-by-category')
  getFilterByCategory(categories: string): Promise<(User & Document)[]> {
    return this.userService.getFilterByCategory(categories);
  }
}
