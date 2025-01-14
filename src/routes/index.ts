import { Router } from "express";
import { products } from "./products";

const routes = Router();

routes.use("/products", products);

export { routes };