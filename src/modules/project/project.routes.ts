import { Router } from "express";
import * as controller from "./project.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.delete("/:id", controller.remove);

export default router;