import { Router } from "express";
import { isAuthenticate } from "../middlewares/auth.middleware";
import { CategoryController } from "../controllers/category.controller";
import { isAdmin } from "../middlewares/isAdmin.middleware";
const router = Router()


router.get("/",isAuthenticate, CategoryController.getAll)
router.get("/:id",isAuthenticate, CategoryController.getById)
router.post("/",isAuthenticate, isAdmin, CategoryController.create)
router.delete("/:id",isAuthenticate,isAdmin, CategoryController.delete)
router.put("/:id",isAuthenticate,isAdmin, CategoryController.update) 



export default router