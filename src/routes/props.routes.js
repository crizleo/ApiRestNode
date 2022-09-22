import { Router } from "express";
import {
  getAllProps,
  getProp,
  createProp,
  delProp,
  updateProp,
  countProps,
} from "../controllers/props.controller";

const router = Router();

router.get("/api/propietarios", getAllProps);

router.get("/api/propietarios/:propCod", getProp);

router.get("/api/propietarios/count", countProps);

router.post("/api/propietarios/", createProp);

router.delete("/api/propietarios/:propCod", delProp);

router.put("/api/propietarios/:propCod", updateProp);

export default router;
