import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './user-details.interface';
import { Store } from 'src/business/schemas/store.schema';
import { Listing } from 'src/business/listing/schemas/listing.schema';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }

  @Get(':id/store')
  getStore(@Param('id') id: string): Promise<Store | null> {
    return this.userService.getStore(id);
  }

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
}
