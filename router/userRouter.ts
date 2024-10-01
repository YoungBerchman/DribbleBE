import { Router } from "express";
import {
  createUserAccount,
  getAllUsers,
  loginUserAccount,
} from "../controller/userController";

const router: Router = Router();
router.route("/get-users").get(getAllUsers);
router.route("/create-users").post(createUserAccount);
router.route("/login-users").post(loginUserAccount);

export default router;
