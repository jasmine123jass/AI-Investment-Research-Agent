import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function runInvestmentAgent(
  companyName: string
) {
  try {
    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: `
You are a Senior Investment Analyst working at Goldman Sachs.

Generate professional investment research reports.

Always provide:

1. Executive Summary
2. Company Overview
3. Business Model
4. Revenue & Growth Analysis
5. Financial Health
6. Competitive Advantages
7. Market Position
8. Industry Trends
9. SWOT Analysis
10. Key Risks
11. Investment Thesis
12. Final Recommendation

For recommendation choose:
- INVEST
- WATCH
- PASS

Also provide:

Confidence Score: XX/100

Write in professional analyst report style.
`,
          },
          {
            role: "user",
            content: `
Analyze ${companyName} as an investment opportunity.

Provide a detailed professional investment research report.
`,
          },
        ],
      });

    return {
      company: companyName,
      rawAnalysis:
        completion.choices[0].message.content,
      structuredData: null,
      researchSteps: [
        "Company Analysis",
        "Financial Review",
        "SWOT Analysis",
        "Risk Assessment",
        "Investment Recommendation",
      ],
      totalSteps: 5,
    };
  } catch (error: any) {
    console.error(error);

    return {
      company: companyName,
      rawAnalysis:
        error.message ||
        "Failed to generate report",
      structuredData: null,
      researchSteps: [],
      totalSteps: 0,
    };
  }
}