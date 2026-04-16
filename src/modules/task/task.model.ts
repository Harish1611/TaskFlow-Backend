import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: String,
    status: {
      type: String,
      enum: ["todo", "inprogress", "done"],
      default: "todo",
    },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);