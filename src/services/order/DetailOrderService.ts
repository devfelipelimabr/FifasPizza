import prismaClient from "../../prisma";

interface DetailRequire {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: DetailRequire) {
    if (!order_id) {
      throw new Error("Invalid order");
    }

    const order = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });

    return order;
  }
}

export { DetailOrderService };
