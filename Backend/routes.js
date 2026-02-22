import express from "express";
import { startConversation } from "./chat.js";
import { createInterview} from "./chat.js";
import { generateReport} from "./chat.js";
import { chatHistory } from "./chat.js";
import { askTechnicalQuestion } from "./chat.js";
const router = express.Router();

router.post('/start',startConversation);
router.post('/chat',createInterview);
router.post('/end',generateReport);
router.get('/history/:sessionId',chatHistory);
router.post("/ask", askTechnicalQuestion);
export default router;