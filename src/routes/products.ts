import { Router } from "express";
import { myMiddleware } from "../middlewares/myMiddleware";
import { ProductsController } from "../controllers/ProductsController";

const products = Router();
const productsController = new ProductsController();

products.get("/", productsController.index);

products.post("/", myMiddleware, productsController.create);

export { products };