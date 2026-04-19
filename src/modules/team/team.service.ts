import { Team } from "./team.model";
import { TeamMember } from "./teamMember.model";

export const createTeam = async (name: string, userId: string) => {
  const team = await Team.create({
    name,
    ownerId: userId,
  });

  // Add creator as ADMIN
  await TeamMember.create({
    userId,
    teamId: team._id,
    role: "admin",
  });

  return team;
};

export const getUserTeams = async (userId: string) => {
  const memberships = await TeamMember.find({ userId });

  const teamIds = memberships.map((m) => m.teamId);

  return Team.find({ _id: { $in: teamIds } });
};

// Get single team with access check
export const getTeamById = async (teamId: string, userId: string) => {
  const member = await TeamMember.findOne({ teamId, userId });

  if (!member) throw new Error("Access denied");

  return Team.findById(teamId);
};


// Delete team (only owner)
export const deleteTeam = async (teamId: string, userId: string) => {
  const team = await Team.findById(teamId);

  if (!team) throw new Error("Team not found");

  if (team.ownerId.toString() !== userId) {
    throw new Error("Only owner can delete team");
  }

  await Team.deleteOne({ _id: teamId });
  await TeamMember.deleteMany({ teamId });
};