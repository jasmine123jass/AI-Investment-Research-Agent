import { NextRequest, NextResponse } from "next/server";
import { runInvestmentAgent } from "@/lib/agent";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const company = body.company?.trim();

    if (!company) {
      return NextResponse.json(
        {
          success: false,
          error: "Company name is required",
        },
        { status: 400 }
      );
    }

    const result = await runInvestmentAgent(
      company
    );

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      ...result,
    });
  } catch (error: any) {
    console.error(
      "Investment Agent Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          "Failed to generate report",
      },
      { status: 500 }
    );
  }
}