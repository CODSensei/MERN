const express = require("express");
const router = express.Router();

const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController.js");

//GET all workouts
router.get("/", getAllWorkouts);

//GET single workout
router.get("/:id", getWorkout);

//POST new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
