import {Router} from "express";

import AuthController from "../Controllers/AuthController";

const router = Router();

router.get("/url", AuthController.getAuthURL);
router.get("/accessToken", AuthController.getAccessToken);
router.get("/userInfo/:accessToken", AuthController.getUserInfo)

export default router;
