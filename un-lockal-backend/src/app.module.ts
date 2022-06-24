import { Module } from '@nestjs/common';
import { BusinessModule } from './business/business.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessController } from './business/controller/business/business.controller';
import { BusinessService } from './business/services/business.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, BusinessModule, MongooseModule.forRoot('mongodb://localhost:3001/test')],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class AppModule {}
