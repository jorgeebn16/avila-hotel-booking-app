import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
const morgan = require("morgan");

const db = require('./config/connection');
require("dotenv").config();
const app = express();
const path = require('path');

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const PORT = process.env.PORT || 8000;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
