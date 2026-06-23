# AI Investment Research Agent

An AI-powered investment research platform that generates professional company analysis reports using LangChain, LangGraph, and Large Language Models (LLMs).

## Overview

AI Investment Research Agent helps users evaluate companies as investment opportunities by generating detailed analyst-style reports. The platform leverages AI to assess company fundamentals, business models, financial health, risks, competitive advantages, and investment potential.

## Features

* AI-Powered Company Analysis
* Executive Summary Generation
* Revenue & Growth Analysis
* Financial Health Evaluation
* SWOT Analysis
* Risk Assessment
* Market Position Analysis
* Investment Recommendations
* Confidence Scoring
* Search History
* Copy Report Functionality
* Download Report Functionality
* Responsive Modern UI

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### AI & Backend

* LangChain
* LangGraph
* Groq LLM (Llama 3.3 70B)
* Next.js API Routes

## Project Architecture

User Input
↓
Next.js Frontend
↓
API Route (/api/research)
↓
LangChain Agent
↓
Groq LLM
↓
Investment Analysis Report
↓
Interactive UI Display

## Project Structure

app/
├── api/
│ └── research/
│ └── route.ts
├── page.tsx

components/
├── ResearchResult.tsx

lib/
├── agent.ts

public/

## Installation

Clone the repository:

```bash
git clone https://github.com/jasmine123jass/AI-Investment-Research-Agent.git
cd AI-Investment-Research-Agent
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env.local` file:

```env
GROQ_API_KEY=your_groq_api_key
```

## Usage

1. Enter a company name.
2. Click **Analyze Company**.
3. View the generated investment report.
4. Copy or download the report.

## Example Companies

* Tesla
* NVIDIA
* Apple
* Microsoft
* Amazon

## Future Enhancements

* Real-Time Web Search Integration
* Financial Data APIs
* Stock Price Tracking
* News Sentiment Analysis
* Portfolio Dashboard
* PDF Report Export
* Multi-Agent Research Workflow

## Learning Outcomes

This project demonstrates:

* Full Stack Development with Next.js
* AI Application Development
* LangChain Integration
* LangGraph-Based Agent Design
* LLM Prompt Engineering
* API Development
* TypeScript Development
* Modern UI/UX Design

## Author

Srujitha Jasmine Baggam

B.Tech Computer Science Engineering (AI & Machine Learning)

Lovely Professional University
