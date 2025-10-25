import express from "express";
import postFeedbackData  from "../controllers/feedbackController.js";


const router = express.Router();

router.post("/formdata", postFeedbackData);

export default router;