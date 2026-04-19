import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import projectRoutes from "../modules/project/project.routes";
import taskRoutes from "../modules/task/task.routes";
import teamRoutes from "../modules/team/team.routes";
const router = Router();

router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);


router.use("/teams", teamRoutes);

export default router;