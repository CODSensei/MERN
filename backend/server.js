require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//express app being stored in app variable
const app = express();

//global middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//reacting to requests on port 4000 / routes / middleware
app.use("/api/workouts", workoutRoutes);

//DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening to a certain port number /request
    app.listen(process.env.PORT, () => {
      console.log("connected to DB and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
