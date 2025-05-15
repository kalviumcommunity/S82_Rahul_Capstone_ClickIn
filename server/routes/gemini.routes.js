import express from 'express';
import { handleGeminiAutocomplete } from '../controllers/gemini.controller.js';

const router = express.Router();

router.post('/autocomplete', handleGeminiAutocomplete);

export default router;
