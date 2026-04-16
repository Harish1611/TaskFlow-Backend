import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);