import express, { Request, Response } from "express";
import { globalErrorHandler } from "./common/middlewares/globalErrorHandler";
import router from "./category/category-router";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello from catalog service" });
});

app.use(globalErrorHandler);

app.use("/category", router);

export default app;
