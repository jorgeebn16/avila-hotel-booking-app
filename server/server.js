const express = require("express");
const path = require("path");
const { readdirSync } = require ("fs");
const cors = require ("cors");
const morgan = require("morgan");
require("dotenv").config();

const db = require("./config/connection");
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
  });
});
