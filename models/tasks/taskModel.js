import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  task: String,
  hour: Number,
  type: String,
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
