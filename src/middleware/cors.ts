import cors from "cors";

export const corsOptions = cors({
  origin: ["http://localhost:5173"], // frontend URL
  credentials: true,
});