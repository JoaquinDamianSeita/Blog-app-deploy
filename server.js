const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const {
  clientOrigins,
  serverPort,
  mongoAtlasPassword,
} = require("./config/env.dev");

const app = express();

const MONGODB_URI = `mongodb+srv://Blog-app-db:${mongoAtlasPassword}@cluster0.iofkv.mongodb.net/Blog-app-db?retryWrites=true&w=majority`;

const PORT = process.env.PORT || serverPort;

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors({ origin: clientOrigins }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api", router);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

//------------------------mongoose------------------
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);

mongoose.connection.once("open", function () {
  console.log("Connected to the Database.");
});

mongoose.connection.on("error", function (error) {
  console.log("Mongoose Connection Error : " + error);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});
