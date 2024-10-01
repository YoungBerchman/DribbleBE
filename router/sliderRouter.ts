import { Router } from "express";
import { createSlider, viewAllSlider } from "../controller/sliderController";

const router: Router = Router();

router.route("/view-slider").get(viewAllSlider);
router.route("/create-slider").post(createSlider);

export default router;
