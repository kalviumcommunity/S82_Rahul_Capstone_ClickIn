import { GoogleGenerativeAI } from '@google/generative-ai';
import sleep from 'sleep-promise';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

const retryRequest = async (fn, retries = 3, delay = 58000) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (error.status === 429) {
        const backoffDelay = delay * Math.pow(2, i);
        console.log(`Rate limit hit, retrying in ${backoffDelay / 1000}s...`);
        await sleep(backoffDelay);
      } else {
        throw error;
      }
    }
  }
  throw lastError;
};

export const handleGeminiAutocomplete = async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await retryRequest(() =>
      model.generateContent({
        contents: [
          {
            parts: [{ text: `Give 5 autocomplete suggestions for "${prompt}" separated by commas.` }]
          }
        ]
      })
    );

    const text = result.response.candidates[0].content.parts[0].text;
    const suggestions = text
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    res.json({ suggestions });
  } catch (error) {
    console.error("Gemini API Error:", error?.response?.data || error.message || error);
    res.status(500).json({ error: "Gemini API Error" });
  }
};
