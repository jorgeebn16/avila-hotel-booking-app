import express from "express";

const router = express.Router();

import{ registration } from "../controllers/auth";

router.post('/registration', registration)

module.exports = router;