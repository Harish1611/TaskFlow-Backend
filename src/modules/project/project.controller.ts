import { Request, Response } from "express";
import * as service from "./project.service";

export const create = async (req: any, res: Response) => {
  try {
    const project = await service.createProject({
      name: req.body.name,
      description: req.body.description,
      teamId: req.body.teamId, // must come from frontend
      createdBy: req.user.userId, // from JWT
    });

    res.json(project);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getAll = async (req: any, res: Response) => {
  const projects = await service.getProjects(req.user.userId);
  res.json(projects);
};

export const remove = async (req: Request, res: Response) => {
  await service.deleteProject(req.params.id);
  res.json({ success: true });
};