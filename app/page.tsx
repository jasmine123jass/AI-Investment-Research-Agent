"use client";

import { useState } from "react";
import ResearchResult from "@/components/ResearchResult";

export default function Home() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [history, setHistory] = useState<string[]>([]);

  const handleResearch = async () => {
    if (!company.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/research", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
        }),
      });

      const data = await response.json();

      setResult(data);

      if (!history.includes(company)) {
        setHistory((prev) => [company, ...prev.slice(0, 4)]);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const companies = [
    "Tesla",
    "NVIDIA",
    "Apple",
    "Microsoft",
    "Amazon",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-black mb-4">
            AI Investment Research Agent
          </h1>

          <p className="text-gray-600 text-lg">
            Generate AI-powered investment research reports,
            evaluate financial strength, identify risks,
            and make smarter investment decisions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name..."
            className="w-full border border-gray-300 p-4 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div className="flex flex-wrap gap-2 mt-4">
            {companies.map((stock) => (
              <button
                key={stock}
                onClick={() => setCompany(stock)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-black transition"
              >
                {stock}
              </button>
            ))}
          </div>

          <button
            onClick={handleResearch}
            disabled={loading}
            className="mt-6 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition"
          >
            {loading
              ? "Generating Report..."
              : " Analyze Company"}
          </button>
        </div>

        {history.length > 0 && (
          <div className="mt-6 bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold text-black mb-2">
              Recent Searches
            </h3>

            <div className="flex flex-wrap gap-2">
              {history.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCompany(item)}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {result && (
          <ResearchResult result={result} />
        )}
      </div>
    </main>
  );
}  