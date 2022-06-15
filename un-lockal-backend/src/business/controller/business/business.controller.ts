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
import { CreateStoreDto } from 'src/business/dtos/CreateStore.dto';
import { Business } from 'src/business/schemas/business.schema';
import { BusinessService } from 'src/business/services/business.service';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Get('/search/:username')
  getStore(@Param('username') username: string) {
    const user = this.businessService.findBusiness(username);
    if (user) {
      return user;
    } else {
      throw new HttpException('Store not found!', HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  @UsePipes(ValidationPipe)
  createStore(@Body() createStoreDto: CreateStoreDto) {
    console.log(createStoreDto);
    this.businessService.createBusiness(
      createStoreDto.username,
      createStoreDto.storeTitle,
      createStoreDto.storeDescription,
    );
  }

  @Get()
  getAllStores() {
    return this.businessService.getAllBusinesses();
  }

  @Patch('update/:username')
  async updateStore(@Param('username') username : string, @Body() updateStoreDto : CreateStoreDto) : Promise<Business> {
    return this.businessService.updateBusiness(username, updateStoreDto);
  }
}
