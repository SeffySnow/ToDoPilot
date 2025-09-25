# 📝 ToDoPilot - Voice-Powered Task Manager

A beautifully designed, voice-enabled to-do list application that transforms how you manage daily tasks. Built with a focus on **conversational interaction** and **seamless user experience**, this project bridges the gap between traditional task management and natural language processing.

---
## 🎥 Demo

![Demo](demo/demo.gif)

*Watch the demo to see voice commands, task management, and the beautiful interface in action!*

---
## 🌐 Live Demo

🔗 **[https://seffysnow.github.io/ToDoPilot/](https://seffysnow.github.io/ToDoPilot/)**

---

## 🎯 The Story Behind This Project

This project started as a simple spark, the wish to capture tasks just by speaking them out loud. Thanks to the power of large language models (LLMs), that spark quickly turned into something real. It’s fascinating how, today, you can take an idea from your head and bring it to life faster than ever before.

Instead of only building another to-do app, I wanted to create an experience that feels almost human: when you say “I have to go to football today” or “I am going to get my nails done by Friday,” the app doesn’t just hear your words, it understands your intent. That’s the magic of combining speech with intelligent interpretation.

This project showed me how much easier LLMs make it to transform ideas into working products. It’s been deeply motivating, reminding me that creativity paired with these tools isn’t just about functionality, it’s about giving ideas a kind of life of their own

---

## ✨ Key Features

### 🎤 **Voice Commands**
- **Natural Language Processing**: Say "I have to go to football today" and watch it become a task
- **Smart Date Recognition**: Understands "today," "tomorrow," "by Friday," and complex date expressions
- **Intent Understanding**: Recognizes various phrasings like "I need to," "I'm going to," "Add..."
- **Fallback Intelligence**: Multiple layers of parsing ensure your voice commands always work

### 📋 **Task Management**
- **Multi-Selection**: Select multiple tasks for bulk operations
- **Smart Filtering**: View All, Completed, or Active tasks with visual button states
- **Inline Editing**: Quick edit with popup modals
- **Due Date Management**: Visual calendar icons with natural language date parsing

### 🎨 **Beautiful Design**
- **Paper-like Interface**: Elegant design with subtle blur effects and realistic paper styling
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Intuitive Interactions**: Hover effects, smooth transitions, and clear visual feedback
- **Accessibility**: Keyboard navigation and screen reader friendly

---

## 🚀 Getting Started

### **Option 1: Use the Live Version**
Simply visit **[https://seffysnow.github.io/ToDoPilot/](https://seffysnow.github.io/ToDoPilot/)** and start using it immediately!

Note: You can create your own API key from [OpenRouter](https://openrouter.ai/) and use your credentials.
I used x-ai/grok-4-fast:free

### **Option 2: Run Locally**

1. **Clone the repository**
   ```bash
   git clone https://github.com/SeffySnow/ToDoPilot.git
   cd ToDoPilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```bash
   OPENROUTER_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 🛠️ Technical Architecture

### **Frontend Technologies**
- **HTML5** - Semantic structure and accessibility
- **CSS3** - Modern styling with flexbox, backdrop filters, and smooth animations
- **JavaScript (jQuery)** - DOM manipulation and event handling
- **Web Speech API** - Browser-native voice recognition
- **Bootstrap** - Responsive grid system and components

### **AI & Backend**
- **LLM Integration** - OpenRouter API for natural language understanding
- **Intent Classification** - Smart parsing of user commands
- **Date Processing** - chrono-node for natural language date parsing
- **Express.js** - Lightweight server for API proxy and static file serving
- **Security** - API keys kept server-side, never exposed to client

### **Key Innovations**
- **Multi-layer Fallback System** - Ensures voice commands work even with imperfect AI responses
- **Conversational UX** - Natural language input that feels like talking to a human
- **Smart Error Handling** - Graceful degradation when voice recognition fails
- **Progressive Enhancement** - Works without JavaScript, enhanced with voice features

---


## 📁 Project Structure

```plaintext
📦 ToDoPilot/
├── index.html              # Main HTML structure
├── new.css                 # Custom styling with paper-like design
├── bootstrap.min.css       # Bootstrap v3.3.7 (local)
├── js/
│   └── jquery-3.6.1.min.js # jQuery library
├── images/                 # Background images and assets
├── demo/
│   └── demo.gif           # Project demonstration
├── server.js              # Express server (local development)
├── package.json           # Node.js dependencies
└── .env                   # Environment variables (not committed)
```

---

## 🤝 Contributing

I welcome contributions from fellow developers who share the vision of making technology more human and intuitive! Here's how you can help:

### **Ways to Contribute**
- 🐛 **Bug Reports**: Found an issue? Please open a GitHub issue
- 💡 **Feature Ideas**: Have ideas for new voice commands or UX improvements?
- 🔧 **Code Contributions**: Fork the repo, make changes, and submit a pull request
- 📖 **Documentation**: Help improve this README or add code comments
- 🎨 **Design**: Suggestions for UI/UX improvements are always welcome

### **Development Guidelines**
- Follow the existing code style and structure
- Test voice commands thoroughly before submitting
- Ensure changes work on both desktop and mobile
- Keep the conversational UX philosophy in mind

### **Getting Started with Contributions**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test locally with `npm start`
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

---



---

## 🙏 Acknowledgments

- **OpenRouter** for providing the LLM API that makes voice understanding possible
- **chrono-node** for natural language date parsing
- **Bootstrap** and **jQuery** for the solid foundation
- **Web Speech API** for browser-native voice recognition
- The open-source community for inspiration and support

---

*Built with ❤️ by [SeffySnow](https://github.com/SeffySnow) - because sometimes the best solutions come from solving your own problems first.*
