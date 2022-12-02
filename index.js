const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const url = `mongodb+srv://jaimishakoaldiya:jemu@2021@cluster0.ukczm45.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to mongo.");
  })
  .catch((err) => {
    console.log("Error connecting to mongo.", err);
  });
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", require("./api/router/router.js"));

app.listen(process.env.PORT || 8000, () => {
  console.log(`server in on 8000`);
});
