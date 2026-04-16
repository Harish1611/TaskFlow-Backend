import { Request, Response, NextFunction } from "express";
import { TeamMember } from "../modules/team/teamMember.model";

export const requireRole = (role: "admin" | "member") => {
  return async (req: any, res: Response, next: NextFunction) => {
    const { teamId } = req.params;

    const member = await TeamMember.findOne({
      userId: req.user.userId,
      teamId,
    });

    if (!member || member.role !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};