import { CategoryController } from "./category-controller";
import { Router } from "express";
import categoryValidator from "./category-validator";
import { CategoryService } from "./category-service";
import logger from "../config/logger";

const router = Router();

const categoryService = new CategoryService();
const categoryController = new CategoryController(categoryService, logger);

router.post("/", categoryValidator, categoryController.create);

export default router;
