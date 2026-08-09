# 🗺️ Campus Navigation Chatbot

An interactive **Campus Navigation Chatbot** designed to help students, staff, and visitors easily find routes and locations within the **NPR Group of Institutions, Natham, Dindigul**.

The project combines an interactive campus map with an AI-powered chatbot to provide location-based navigation assistance.

## 🚀 Features

* 🗺️ Interactive campus map using Leaflet.js
* 🤖 AI-powered campus navigation chatbot
* 📍 Campus location markers
* 🧭 Route and direction assistance
* 💬 Interactive chat interface
* 📱 Responsive design for desktop and mobile
* ⚡ Real-time chatbot responses
* 🔐 Secure API key handling using environment variables

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Leaflet.js

### Backend

* Node.js
* Express.js
* OpenAI API
* CORS
* dotenv

### Deployment

* GitHub
* Vercel

## 📂 Project Structure

```text
Campus-Navigation-Chatbot/
│
├── index.html
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
│
├── 1.png
├── 11.png
├── 12.png
├── 14.png
├── animatedicon.png
├── blue.jpg
├── navigatenpr.png
│
└── 14_files/
    └── blue.jpg
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/ThanushaMuthuM/Campus-Navigation-Chatbot.git
```

Open the project folder:

```bash
cd Campus-Navigation-Chatbot
```

Install dependencies:

```bash
npm install
```

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

⚠️ Never upload your `.env` file to GitHub.

Make sure `.gitignore` contains:

```text
.env
node_modules/
```

## ▶️ Run Locally

Start the server:

```bash
npm start
```

You should see:

```text
Server running on http://localhost:3000
```

Then open:

```text
http://localhost:3000
```

## 🌐 Live Demo

**Campus Navigation Chatbot**

https://campus-navigation-chatbot.vercel.app/

## 💬 Example Queries

You can ask questions such as:

```text
How do I go from the library to the canteen?

Where is the main gate?

How can I reach the administrative block?

Give me directions to the academic block.
```

The chatbot is designed specifically to answer **campus route and direction-related queries**.

## 🔒 Security

API keys and sensitive environment variables are not included in the repository.

The `.env` file is excluded using `.gitignore`.

## 🎯 Future Enhancements

* 🚶 Turn-by-turn navigation
* 📍 Real-time user location tracking
* 🗺️ Improved campus route visualization
* 🎤 Voice-based navigation
* 📱 Progressive Web App support
* 🏫 More campus buildings and locations
* 🧠 Improved AI route understanding

## 👩‍💻 Author

**M. Thanusha Muthu**

B.E. Computer Science and Engineering

GitHub:
https://github.com/ThanushaMuthuM

LinkedIn:
https://linkedin.com/in/m-thanusha-muthu-7600972a0

## 📄 License

This project is licensed under the **MIT License**.
