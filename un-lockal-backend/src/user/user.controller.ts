import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './user-details.interface';
import { Store } from 'src/business/schemas/store.schema';
import { Listing } from 'src/business/listing/schemas/listing.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }

  @Get(':id/store')
  getStore(@Param('id') id: string): Promise<Store | null> {
    return this.userService.getStore(id);
  }

  @Get(':id/listings')
  getListings(@Param('id') id: string): Promise<Listing[] | null> {
    return this.userService.getAllListing(id);
  }
}
