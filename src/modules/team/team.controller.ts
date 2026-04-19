import { Request, Response } from "express";
import * as service from "./team.service";


// Create Team
export const createTeam = async (req: any, res: Response) => {
  try {
    const { name } = req.body;

    const team = await service.createTeam(name, req.user.userId);

    res.status(201).json(team);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};


// Get My Teams
export const getMyTeams = async (req: any, res: Response) => {
  try {
    const teams = await service.getUserTeams(req.user.userId);

    res.json(teams);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};


// Get Single Team (optional but useful)
export const getTeamById = async (req: any, res: Response) => {
  try {
    const team = await service.getTeamById(
      req.params.id,
      req.user.userId
    );

    res.json(team);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};


// Delete Team (ONLY OWNER)
export const deleteTeam = async (req: any, res: Response) => {
  try {
    await service.deleteTeam(req.params.id, req.user.userId);

    res.json({ success: true });
  } catch (err: any) {
    res.status(403).json({ message: err.message });
  }
};