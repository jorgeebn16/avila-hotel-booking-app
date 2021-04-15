import express from "express";

const router = express.Router();

import{ registration, login } from "../controllers/auth";

router.post('/registration', registration)
router.post('/login', login)

module.exports = router;