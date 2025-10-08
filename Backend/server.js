"use strict";
const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
const { prompt } = require("./prompt.js");

// init express
const app = express();
app.use(express.json());

// load environment variables
require("dotenv").config();

// load API key from .env
const API_KEY = process.env.GEMINI_API_KEY;

// init Gemini client
const ai = new GoogleGenAI(API_KEY);

// middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));

// endpoint - post req
app.post("/adviser", async (req, res) => {
  // extract user's response from the request body
  const { history } = req.body;

  // Initial message once conversation is started
  if (!history || history.length === 0) {
    return setTimeout(() => {
      res.status(200).json({
        response:
          "Hi I'm Tina and I can assist you in choosing the right insurance policy for your motor vehicle. May I ask you a few personal questions to help my recommendation?",
      });
    }, 2000);
  }

  // Convert history to Gemini format
  const contents = history.map((msg) => ({
    role: msg.role === "interviewer" ? "model" : "user",
    parts: [{ text: msg.text }],
  }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: { systemInstruction: prompt },
    });

    const reply = response.text;

    const isDone = reply.includes(
      "Thank you for your information. Based on our conversation I can recommend the below:"
    );

    res.json({ response: reply, done: isDone });
  } catch (error) {
    //error handling
    console.error("Error message not processed");
    res.status(400).json({ error: "Error message not processed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
