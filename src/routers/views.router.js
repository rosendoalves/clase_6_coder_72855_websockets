import { Router } from "express";
import {
  indexView,
  productView,
  cartView,
  profileView,
  registerView,
} from "../controllers/views.controller.js";

const viewsRouter = Router();

viewsRouter.get("/", indexView);
viewsRouter.get("/product/:pid", productView);
viewsRouter.get("/cart", cartView);
viewsRouter.get("/profile/:uid", profileView);
viewsRouter.get("/users/register", registerView);

export default viewsRouter;
