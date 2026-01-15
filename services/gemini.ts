
import { GoogleGenAI, Type } from "@google/genai";
import { PoemResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateAnniversaryPoem = async (mood: string): Promise<PoemResult> => {
  const prompt = `Write a beautiful, romantic, and sophisticated 17th-anniversary poem for a couple named Arunima and Sourish. 
  The mood should be ${mood}. 
  Mention that 17 years is a beautiful milestone often associated with the 'Furniture' anniversary (building a life) or just the number 17. 
  Focus on their names and the strength of their bond.
  Format the response as a JSON object with 'poem' and 'theme' properties.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            poem: { type: Type.STRING },
            theme: { type: Type.STRING }
          },
          required: ["poem", "theme"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return result as PoemResult;
  } catch (error) {
    console.error("Error generating poem:", error);
    return {
      poem: "Seventeen years of walking hand in hand,\nBuilding a life as beautiful as planned.\nArunima and Sourish, a love so bright,\nGuiding each other through day and night.",
      theme: "Classic Love"
    };
  }
};
