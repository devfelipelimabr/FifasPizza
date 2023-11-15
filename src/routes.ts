import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuth } from "./middlewares/isAuth";

const router = Router();

// -- ROTAS USERS --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/userinfo", isAuth, new DetailUserController().handle)

export { router };
