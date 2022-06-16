import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessSchema } from './schemas/business.schema';
import { Business } from './schemas/business.schema';
import { BusinessController } from './controller/business/business.controller';
import { BusinessService } from './services/business.service';
import { BusinessRepository } from './schemas/business.repository';


@Module({
  imports: [MongooseModule.forFeature([{name : Business.name, schema : BusinessSchema }])],
  controllers: [BusinessController,],
  providers: [BusinessService, BusinessRepository],
  exports : [BusinessRepository]
})
export class BusinessModule {}
