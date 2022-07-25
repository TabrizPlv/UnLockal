import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { orderSchema } from './schemas/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './order.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "order", schema: orderSchema }])],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]

})
export class OrderModule {}
