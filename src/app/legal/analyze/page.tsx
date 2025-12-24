'use client';

import { useState } from 'react';

export default function LegalAnalyze() {
  const [fileKey, setFileKey] = useState('');
  const [analysisType, setAnalysisType] = useState('risk');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileKey.trim()) return;

    setAnalyzing(true);

    try {
      const response = await fetch('/api/legal/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileKey,
          analysisType
        })
      });

      const data = await response.json();
      setAnalysis(data);
    } catch (error) {
      console.error('Analysis error:', error);
      setAnalysis({ error: 'Analysis failed' });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Document Analysis</h1>
          <p className="text-gray-600 mb-8">Analyze legal documents using AI to extract insights</p>

          <form onSubmit={handleAnalyze} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                File Key
              </label>
              <input
                type="text"
                value={fileKey}
                onChange={(e) => setFileKey(e.target.value)}
                placeholder="legal/documents/your-file-key"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <p className="mt-1 text-sm text-gray-500">Enter the S3 file key from the upload page</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Analysis Type
              </label>
              <select
                value={analysisType}
                onChange={(e) => setAnalysisType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="risk">Risk Assessment</option>
                <option value="summary">Summary</option>
                <option value="clauses">Key Clauses</option>
                <option value="obligations">Obligations</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={!fileKey.trim() || analyzing}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
            >
              {analyzing ? 'Analyzing...' : 'Analyze Document'}
            </button>
          </form>

          {analysis && (
            <div className="mt-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Analysis Results</h2>
                {analysis.error ? (
                  <p className="text-red-600">{analysis.error}</p>
                ) : (
                  <div className="space-y-4">
                    {analysis.summary && (
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Summary:</h3>
                        <p className="text-gray-700">{analysis.summary}</p>
                      </div>
                    )}
                    {analysis.risks && (
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Risks:</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {analysis.risks.map((risk: string, i: number) => (
                            <li key={i}>{risk}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {analysis.keyPoints && (
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Key Points:</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {analysis.keyPoints.map((point: string, i: number) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {analysis.content && (
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Full Analysis:</h3>
                        <p className="text-gray-700 whitespace-pre-wrap">{analysis.content}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
