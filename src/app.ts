import express from "express";
import helmet from "helmet";
import routes from "./routes";
import { corsOptions } from "./middleware/cors";
import { rateLimiter } from "./middleware/rateLimiter";
import { morganMiddleware } from "./middleware/logger.middleware";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(corsOptions);
app.use(morganMiddleware);
app.use(rateLimiter);

app.use("/api/v1", routes);

app.use(errorHandler);

export default app;