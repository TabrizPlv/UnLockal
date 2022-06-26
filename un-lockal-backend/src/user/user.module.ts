import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessModule } from 'src/business/business.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: userSchema }]), BusinessModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
