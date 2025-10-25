import express from "express";
import serverFeedbackController from "../controllers/serverFeedbackController.js";


const router = express.Router();

router.get("/all-feedback", serverFeedbackController);

export default router;