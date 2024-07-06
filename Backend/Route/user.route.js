import { Router } from "express";
import { userController } from "../Controller/user.controller.js";

const router = Router();

router.route("/create-user").post(userController);

export default router;
