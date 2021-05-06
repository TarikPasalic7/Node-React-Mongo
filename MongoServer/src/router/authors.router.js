import express from "express";
import ctrl from "../controllers/authors.controller";

const router = express.Router();

router.route("/authors")
.get(ctrl.list)
.post(ctrl.create);

router.route("/authors/:id").get(ctrl.read)
.put(ctrl.update)
.delete(ctrl.remove)

export default router;