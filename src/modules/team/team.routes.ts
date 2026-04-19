import express from "express";
import * as controller from "./team.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = express.Router();

router.post("/", authMiddleware, controller.createTeam);
router.get("/", authMiddleware, controller.getMyTeams);
router.get("/:id", authMiddleware, controller.getTeamById);
router.delete("/:id", authMiddleware, controller.deleteTeam);

export default router;