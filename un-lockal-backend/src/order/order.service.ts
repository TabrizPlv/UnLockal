import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Query } from 'mongoose';
import { OrderDocument } from './schemas/order.schema';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('order') private readonly orderModel: Model<OrderDocument>,
  ) {}

  async createOrder(order: Order): Promise<OrderDocument> {
    const newOrder = new this.orderModel({
      product: order.product,
      quantity: order.quantity,
      seller: order.seller,
      buyer: order.buyer,
      status: order.status,
    });
    return newOrder.save();
  }

  async deleteOrder(id: string): Promise<any> {
    return this.orderModel.findByIdAndDelete(id);
  }

  async updateOrderStatus(id: string, newStatus: string): Promise<any> {
    const order = await this.orderModel.findById(id);
    order.status = newStatus;
    await order.save();
  }

  async getAllPlacedOrders(buyerUser: string): Promise<FilterQuery<Order>> {
    const orders = await this.orderModel.find({buyer: buyerUser});
    return orders;
  }

  async getAllPendingOrders(sellingUser: string): Promise<FilterQuery<Order>> {
    const orders = await this.orderModel.find({seller: sellingUser});
    return orders;
  }
}
