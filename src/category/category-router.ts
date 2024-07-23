import { CategoryController } from "./category-controller";
import { NextFunction, Request, Response, Router } from "express";
import categoryValidator from "./category-validator";
import { CategoryService } from "./category-service";
import logger from "../config/logger";

const router = Router();

const categoryService = new CategoryService();
const categoryController = new CategoryController(categoryService, logger);

router.post(
    "/",
    categoryValidator,
    (req: Request, res: Response, next: NextFunction) =>
        categoryController.create(req, res, next),
);

export default router;
