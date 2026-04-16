// import { Project } from "./project.types";
import { v4 as uuid } from "uuid";

import { Project } from "./project.model";

export const createProject = (data: any) => Project.create(data);

export const getProjects = (userId: string) =>
  Project.find({ createdBy: userId }); // FIXED

export const deleteProject = (id: string) =>
  Project.findByIdAndDelete(id);