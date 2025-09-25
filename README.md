# 🤖📝 AI-Powered To-Do List (Voice + LLM)

**Brief Description**
A creative, lightweight to-do app that lets you speak naturally (e.g., “I want to make lunch today”) and turns it into a structured task with a due date. It uses a **Large Language Model (LLM)** and an **agentic executor** behind the scenes to parse intent and perform the right action in the UI.

---

## ✨ Capabilities
- 🗂 **Views:** switch between **Active**, **Completed**, and **All**
- ➕ **Task actions:** add, edit, remove, complete / uncomplete
- 📅 **Due dates:** set via date picker or natural language (“today”, “tomorrow”, etc.)
- 🎙 **Voice assistant:** start/stop mic → speech-to-text → LLM parsing → action execution
- 🧠 **Agentic flow:** JSON `{ intent, task, due_date }` → agent maps to UI operations

---

## 💡 Why This Interested Me
I wanted task management to feel **less effortful** and more conversational. This project let me demonstrate practical **problem-solving** with real UX constraints (voice input, local-time date parsing, error handling) and show **LLM + agentic** integration in a way that’s actually useful.

---

## 🧰 Technologies
- **Frontend:** HTML, CSS, Bootstrap, JavaScript (jQuery), Web Speech API
- **AI & Logic:** LLM for intent/date extraction, lightweight agent to execute intents
- **Date parsing:** chrono-node (natural language → dates, normalized to `YYYY-MM-DD`)
- **Backend:** Node.js, Express (as a proxy to keep API keys secret), node-fetch


## 🎥 Demo

<video src="demo.mp4" 
       controls 
       loop 
       muted 
       playsinline 
       width="720">
  Your browser does not support the video tag. 
  <a href="demo.mp4">Download the demo</a>.
</video>


