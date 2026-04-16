import { Request, Response } from "express";
import * as service from "./task.service";

export const create = (req: Request, res: Response) => {
  const task = service.createTask(req.body);
  res.json(task);
};

export const getAll = (req: Request, res: Response) => {
  const tasks = service.getTasks(req.params.projectId);
  res.json(tasks);
};

export const update = (req: Request, res: Response) => {
  service.updateTask(req.params.id, req.body);
  res.json({ success: true });
};

export const remove = (req: Request, res: Response) => {
  service.deleteTask(req.params.id);
  res.json({ success: true });
};