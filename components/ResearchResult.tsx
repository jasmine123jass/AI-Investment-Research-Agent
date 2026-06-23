interface Props {
  result: any;
}

export default function ResearchResult({
  result,
}: Props) {
  const copyReport = () => {
    navigator.clipboard.writeText(
      result.rawAnalysis
    );

    alert("Report copied successfully!");
  };

  const downloadReport = () => {
    const blob = new Blob(
      [result.rawAnalysis],
      {
        type: "text/plain",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download = `${result.company}-Investment-Report.txt`;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-black">
            {result.company}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Generated on{" "}
            {new Date().toLocaleString()}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={copyReport}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Copy Report
          </button>

          <button
            onClick={downloadReport}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            Download
          </button>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="whitespace-pre-wrap text-black leading-8 text-base">
          {result.rawAnalysis}
        </div>
      </div>
    </div>
  );
}