'use client';

import { useState } from 'react';

export default function LegalIntake() {
  const [formData, setFormData] = useState({
    clientName: '',
    contactInfo: '',
    situation: ''
  });
  const [analysis, setAnalysis] = useState(<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefa
    setLoading(true);
    
    try {
      const response = await fetch('/api/legal/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Client Intake Analysis</h1>
        <p className="text-gray-600 mb-8">AI-powered intake reduces time from 20 min to 2 min</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Client Name</label>
            <input
              type="text"
              value={formData.clientName}
              onChange={(e) => setFormData({...formData, clientName: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Contact Info</label>
            <input
              type="text"
              value={formData.contactInfo}
              onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Describe Your Situation</label>
            <textarea
              value={formData.situation}
              onChange={(e) => setFormData({...formData, situation: e.target.value})}
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your legal situation in detail..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Analyzing...' : 'Analyze Intake'}
          </button>
        </form>

        {analysis && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Analysis Results</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Practice Area:</h3>
                <p className="text-gray-600">{analysis.practiceArea}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Urgency:</h3>
                <p className="text-gray-600">{analysis.urgency}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Jurisdiction:</h3>
                <p className="text-gray-600">{analysis.jurisdiction}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Key Facts:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {analysis.keyFacts.map((fact: string, i: number) => (
                    <li key={i}>{fact}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Next Steps:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {analysis.nextSteps.map((step: string, i: number) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
