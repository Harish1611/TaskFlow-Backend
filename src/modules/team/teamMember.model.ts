import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  role: { type: String, enum: ["admin", "member"], default: "member" },
});

export const TeamMember = mongoose.model("TeamMember", teamMemberSchema);