import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import { AddItemController } from "./controllers/order/AddItemController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

import { isAuth } from "./middlewares/isAuth";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./imgs"));

// -- ROUTS USERS --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/userinfo", isAuth, new DetailUserController().handle);

// -- ROUTS CATEGORIES --
router.post("/categories", isAuth, new CreateCategoryController().handle);
router.get("/categories", isAuth, new ListCategoryController().handle);

// -- ROUTS PRODUCTS --
router.post(
  "/products",
  isAuth,
  upload.single("file"),
  new CreateProductController().handle
);
router.get("/category/products", isAuth, new ListByCategoryController().handle);

// -- ROUTS ORDERS --
router.post("/orders", isAuth, new CreateOrderController().handle);
router.delete("/orders", isAuth, new RemoveOrderController().handle);

router.post("/orders/additem", isAuth, new AddItemController().handle);

export { router };
