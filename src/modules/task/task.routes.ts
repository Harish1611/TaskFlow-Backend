import { Router } from "express";
import * as controller from "./task.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/", controller.create);
router.get("/:projectId", controller.getAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;