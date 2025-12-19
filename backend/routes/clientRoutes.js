import express from "express";
import upload from "../config/upload.js";
import { addClient, getClients } from "../controllers/clientController.js";

const router = express.Router();

router.post("/", upload.single("image"), addClient);
router.get("/", getClients);

export default router;
