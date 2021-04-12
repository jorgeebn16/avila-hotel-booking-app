import express from "express";
import formidable from "express-formidable";

const router = express.Router();


import { requireSignin } from "../middlewares";

import { create, hotels, image, sellerHotels } from "../controllers/hotel";

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);
router.get("/seller-hotels", requireSignin, sellerHotels);

module.exports = router;
