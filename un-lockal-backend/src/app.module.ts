import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [AuthModule, UserModule, OrderModule, MongooseModule.forRoot('mongodb+srv://Tabriz:password1234@unlockal.nnkxw.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
