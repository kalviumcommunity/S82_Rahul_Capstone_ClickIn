import { GenerativeLanguageClient } from '@google/generative-ai';

const client = new GenerativeLanguageClient({
  apiKey: process.env.GOOGLE_API_KEY,
});

export default client;