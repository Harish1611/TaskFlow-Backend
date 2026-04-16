import { Task } from "./task.types";
import { v4 as uuid } from "uuid";

let tasks: Task[] = [];

export const createTask = (data: Partial<Task>) => {
  const task = { id: uuid(), status: "todo", ...data } as Task;
  tasks.push(task);
  return task;
};

export const getTasks = (projectId: string) => {
  return tasks.filter(t => t.projectId === projectId);
};

export const updateTask = (id: string, data: Partial<Task>) => {
  tasks = tasks.map(t => (t.id === id ? { ...t, ...data } : t));
};

export const deleteTask = (id: string) => {
  tasks = tasks.filter(t => t.id !== id);
};