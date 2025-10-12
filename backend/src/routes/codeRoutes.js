import express from "express";
import { analyzeCode } from "../controllers/codeController.js";
const router = express.Router();

router.post("/analyze", analyzeCode);

export default router;
