// import { Project } from "./project.types";
import { v4 as uuid } from "uuid";

import { Project } from "./project.model";


// export const createProject = (data: Partial<Project>) => {
//   const project = { id: uuid(), ...data } as Project;
//   projects.push(project);
//   return project;
// };

// export const getProjects = (userId: string) => {
//   return projects.filter(p => p.userId === userId);
// };

// export const deleteProject = (id: string) => {
//   projects = projects.filter(p => p.id !== id);
// };


export const createProject = (data: any) => Project.create(data);

export const getProjects = (userId: string) =>
  Project.find({ userId });

export const deleteProject = (id: string) =>
  Project.findByIdAndDelete(id);