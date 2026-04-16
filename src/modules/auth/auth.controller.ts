import { Request, Response } from "express";
import * as authService from "./auth.service";

// REGISTER
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    await authService.registerUser(email, password);

    res.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const data = await authService.loginUser(email, password);

    res.json(data);
  } catch (err: any) {
    res.status(401).json({
      message: err.message,
    });
  }
};