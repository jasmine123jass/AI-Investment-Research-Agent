import { ChatGroq } from "@langchain/groq";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
});

export async function runInvestmentAgent(
  companyName: string
) {
  try {
    const response = await model.invoke([
      new HumanMessage(`
You are a professional investment analyst.

Analyze ${companyName} and provide:

1. Executive Summary
2. Company Overview
3. Revenue & Growth Analysis
4. Financial Health
5. SWOT Analysis
6. Risks
7. Investment Thesis
8. Final Recommendation
9. Confidence Score (0-100)
      `),
    ]);

    return {
      company: companyName,
      rawAnalysis: response.content,
      structuredData: null,
      researchSteps: [
        "Company Analysis",
        "Financial Review",
        "Risk Assessment",
        "Investment Recommendation",
      ],
      totalSteps: 4,
    };
  } catch (error: any) {
    return {
      company: companyName,
      rawAnalysis:
        error.message || "Research failed",
      structuredData: null,
      researchSteps: [],
      totalSteps: 0,
    };
  }
}