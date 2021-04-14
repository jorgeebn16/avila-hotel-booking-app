import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();
const db = require('./config/connection');
const path = require('path');
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


db.once('open', () => {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
});


