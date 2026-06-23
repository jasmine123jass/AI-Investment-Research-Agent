# AI Investment Research Agent

## Overview

The AI Investment Research Agent is a web application that helps users evaluate companies as potential investment opportunities. Instead of manually researching financial reports, company information, and market trends, users can simply enter a company name and receive an AI-generated investment analysis report.

The application generates insights such as company overview, financial health, market position, risks, investment thesis, and final recommendations using Large Language Models (LLMs).

---

## Live Demo

Vercel Deployment:

https://ai-investment-research-agent-one.vercel.app

GitHub Repository:

https://github.com/jasmine123jass/AI-Investment-Research-Agent

---

## How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/jasmine123jass/AI-Investment-Research-Agent.git
cd AI-Investment-Research-Agent
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key
```

### Step 4: Start the Application

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## How It Works

### Architecture

```text
User
  ↓
Next.js Frontend
  ↓
API Route (/api/research)
  ↓
LangChain Workflow
  ↓
Groq LLM (Llama 3.3 70B)
  ↓
Generated Investment Report
  ↓
Frontend Display
```

### Workflow

1. User enters a company name.
2. Frontend sends the request to the API route.
3. LangChain processes the request.
4. Groq LLM generates a detailed investment analysis.
5. The report is returned to the frontend.
6. Users can view, copy, or download the report.

---

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### AI Layer

* LangChain
* LangGraph
* Groq LLM (Llama 3.3 70B)

### Backend

* Next.js API Routes

### Deployment

* GitHub
* Vercel

---

## Key Decisions & Trade-offs

### Why Groq?

I evaluated OpenAI, Claude, Gemini, and Groq before selecting Groq.

Reasons:

* Fast inference speed
* Free developer access
* Easy LangChain integration
* Suitable for student projects and rapid development

Trade-off:

* GPT-4o may provide slightly stronger reasoning in some scenarios, but Groq offered the best balance between performance, cost, and accessibility.

### Why Next.js?

* Full-stack framework
* API routes included
* Easy deployment with Vercel

### Why LangChain?

* Simplifies LLM integration
* Makes prompt management easier
* Supports future tool integration

### Why LangGraph?

* Supports multi-agent workflows
* Provides a scalable architecture for future development

### What I Left Out

Due to time constraints, the following features were not implemented:

* Real-time financial APIs
* Web search integration
* News sentiment analysis
* User authentication
* Portfolio tracking dashboard

---

## Example Runs

### Example 1: Apple

Output Summary:

* Strong financial performance
* Diversified revenue streams
* Strong brand loyalty
* Recommended: BUY
* Confidence Score: 85/100

### Example 2: Tesla

Output Summary:

* Market leader in EV industry
* Strong growth potential
* Competitive risks identified
* Recommended: WATCH
* Confidence Score: 80/100

### Example 3: NVIDIA

Output Summary:

* AI and GPU market leader
* Exceptional growth trajectory
* Strong competitive advantage
* Recommended: INVEST
* Confidence Score: 92/100

Screenshots of these outputs are available in the `output` folder.

---

## What I Would Improve With More Time

If given additional development time, I would:

* Integrate Yahoo Finance and Alpha Vantage APIs
* Add Tavily web search
* Implement real-time news analysis
* Add sentiment analysis capabilities
* Create a portfolio management dashboard
* Support PDF report exports
* Implement user authentication
* Build a complete multi-agent LangGraph workflow

These improvements would make the application more accurate, data-driven, and production-ready.

---

## LLM Development Logs (Bonus Requirement)

This project was developed with the assistance of AI throughout the design and implementation process.

The `LLM-chat-logs` folder contains screenshots of development discussions covering:

* System architecture planning
* LLM selection decisions
* Deployment strategy
* LangChain integration
* Future improvement planning

These logs demonstrate the thought process, technical decisions, and AI-assisted development workflow used while building the project.

---

## Project Structure

```text
app/
components/
lib/
LLM-chat-logs/
output/
public/
README.md
package.json
```

---

## Author

Srujitha Jasmine Baggam

B.Tech Computer Science Engineering (AI & Machine Learning)

Lovely Professional University

GitHub:
https://github.com/jasmine123jass
