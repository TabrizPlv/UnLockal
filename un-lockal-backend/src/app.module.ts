import { Module } from '@nestjs/common';
import { BusinessModule } from './business/business.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessController } from './business/controller/business/business.controller';
import { BusinessService } from './business/services/business.service';

@Module({
  imports: [BusinessModule, MongooseModule.forRoot('mongodb+srv://Tabriz:password1234@unlockal.nnkxw.mongodb.net/test')],
  controllers: [BusinessController],
  providers: [BusinessService],
}) 
export class AppModule {}
