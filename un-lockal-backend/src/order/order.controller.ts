import { Body, Controller, Get, Param, Post, Put, Delete, Patch } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { OrderService } from './order.service';
import { Order } from './schemas/order.schema';


@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  //creates an order document inside the orders collection
  @Post('create-order')
  createOrder(@Body() order: Order): Promise<any> {
    return this.orderService.createOrder(order);
  }

  //Deletes an order document by the order's _id
  @Delete(":id/delete-order")
  deleteOrder(@Param('id') id: string): Promise<any> {
    return this.orderService.deleteOrder(id);
  }

  //Updates the status of the order by order's _id
  @Patch(":id/update-order-status/:status")
  updateOrderStatus(@Param('id') id: string, @Param('status') status: string): Promise<any> {
    return this.orderService.updateOrderStatus(id, status);
  }

  //Finds all the orders placed by a user. User is tracked by email
  @Get(":email/get-placed-orders")
  getAllPlacedOrders(@Param('email') email: string): Promise<FilterQuery<Order>> {
    return this.orderService.getAllPlacedOrders(email);
  }

  //Finds all the pending orders of a user. User is tracked by email
  @Get(":email/get-pending-orders")
  getAllPendingOrders(@Param('email') email: string): Promise<FilterQuery<Order>> {
    return this.orderService.getAllPendingOrders(email);
  }
}
