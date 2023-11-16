import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ order_id, product_id, amount }: ItemRequest) {

    if (!order_id || !product_id || !amount) {
        throw new Error("Clear fields");
      }
  
      const order_idExists = await prismaClient.order.findFirst({
          where: {
            id: order_id,
          },
        });
    
        if (!order_idExists) {
          throw new Error("Invalid order");
        }
        
      const product_idExists = await prismaClient.product.findFirst({
          where: {
            id: product_id,
          },
        });
    
        if (!product_idExists) {
          throw new Error("Invalid product");
        }
        
        
    const order = await prismaClient.item.create({
      data: {
        order_id: order_id,
        product_id: product_id,
        amount: amount,
      },
    });

    return order;
  }
}

export { AddItemService };
