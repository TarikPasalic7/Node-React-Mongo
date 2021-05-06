import express from "express";
import ctrl from "../controllers/books.controller";

const router = express.Router();

router.route("/books").get(ctrl.list)
.post(ctrl.create);

router.route("/books/:id").get(ctrl.read)
.put(ctrl.update)
.delete(ctrl.remove)
export default router;