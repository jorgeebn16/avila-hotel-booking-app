import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
const morgan = require("morgan");

const db = require('./config/connection');
require("dotenv").config();
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const PORT = process.env.PORT || 8000;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
