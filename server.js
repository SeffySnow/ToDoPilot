import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// proxy endpoint (keeps your API key server-side)
app.post("/api/voice-command", async (req, res) => {
  try {
    if (!req.body || !req.body.messages) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Voice Task Manager"
      },
      body: JSON.stringify(req.body)
    });

    if (!r.ok) {
      const text = await r.text();
      console.error("OpenRouter error:", r.status, text);
      return res.status(r.status).send(text);
    }

    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Proxy request failed" });
  }
});

// health check
app.get("/healthz", (_req, res) => res.send("ok"));

// SPA fallback (Express 5: regex, not "*")
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
