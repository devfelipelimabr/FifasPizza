import prismaClient from "../../prisma";

class ListOrdersService {
  async execute() {
    const order = await prismaClient.order.findMany({
      where: {
        draft: false,
      },
    });
    return order;
  }
}

export { ListOrdersService };
