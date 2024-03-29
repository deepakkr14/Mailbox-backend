const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(express.json());
const User = require("./models/user");
const inboxRoutes = require("./routes/inbox");
const sentBoxRoutes = require("./routes/sentbox");
const trashBoxRoutes = require("./routes/trash");

app.use(inboxRoutes);
app.use(sentBoxRoutes);
app.use(trashBoxRoutes);

// Connect to MongoDB database using Mongoose ORM
mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
   
    app.listen(process.env.PORT);
    console.log("database connected", ` http://localhost:${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
