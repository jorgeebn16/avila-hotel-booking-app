import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();
const db = require('./config/connection');
const app = express();
const path = require('path');

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;

db.once('open', () => {
  app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
  });
});

app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
