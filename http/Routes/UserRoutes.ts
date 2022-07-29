import {Router} from "express";

import UserController from "../Controllers/UserController";

const router = Router();

router.get("/", UserController.getUsers);

export default router;
