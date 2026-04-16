import mongoose from "mongoose";

const inviteSchema = new mongoose.Schema(
  {
    email: String,
    teamId: mongoose.Schema.Types.ObjectId,
    token: String,
    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Invite = mongoose.model("Invite", inviteSchema);