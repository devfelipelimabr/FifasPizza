import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class EndOrderService {
  async execute({ order_id }: OrderRequest) {
    if (!order_id) {
      throw new Error("Invalid order.");
    }

    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });
    return order;
  }
}

export { EndOrderService };
