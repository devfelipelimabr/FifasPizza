import { Request, Response } from "express";
import { EndOrderService } from "../../services/order/EndOrderService";

class EndOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const endOrder = new EndOrderService();

    const order = await endOrder.execute({ order_id });

    return res.json(order);
  }
}

export { EndOrderController };
