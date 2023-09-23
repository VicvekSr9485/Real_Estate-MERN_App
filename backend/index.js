const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const uploadController = require("./controllers/uploadController")

const app = express();

// Routes & Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/auth", authController)
app.use("/property", propertyController)
app.use("/upload", uploadController)

// Database connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB has been successfully connected");
    // Start the server after the database connection is established
    app.listen(process.env.PORT, () => {
      console.log("Server Started Successfully");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });