import { Request, Response } from "express";
import * as service from "./project.service";

export const create = (req: Request, res: Response) => {
  const project = service.createProject({
    ...req.body,
    userId: (req as any).user.email,
  });
  res.json(project);
};

export const getAll = (req: Request, res: Response) => {
  const projects = service.getProjects((req as any).user.email);
  res.json(projects);
};

export const remove = (req: Request, res: Response) => {
  service.deleteProject(req.params.id);
  res.json({ success: true });
};