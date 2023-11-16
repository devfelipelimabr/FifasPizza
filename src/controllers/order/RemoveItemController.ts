import { Response, Request } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const { item_id } = req.body;

    const removeItem = new RemoveItemService();

    const order = await removeItem.execute({ item_id });

    return res.json(order);
  }
}

export { RemoveItemController };
