import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getAutocompleteSuggestions(userQuery) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
Suggest 5 grocery-related autocomplete terms for: "${userQuery}".
Return only the terms, separated by commas.
Examples: apple, apricot, avocado, almond milk, apple cider
`;

  const result = await model.generateContent(prompt);
  const response = await result.response.text();
  
  return response.split(',').map(item => item.trim()).slice(0, 5);
}
