import express from "express";
import upload from "../config/cloudinary.js";
import { addProject, getProjects } from "../controllers/projectController.js";

const router = express.Router();

router.post("/", upload.single("image"), addProject);
router.get("/", getProjects);

export default router;
