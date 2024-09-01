import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ScoreCard = ({ title, score, description }) => (
  <div className="bg-white shadow rounded-lg p-4 mb-4">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold">{score}%</span>
      <span className={`text-lg ${score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
        {score >= 80 ? '✓' : score >= 60 ? '!' : '⚠'}
      </span>
    </div>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
  </div>
);

const RecommendationList = ({ recommendations }) => (
  <div className="bg-white shadow rounded-lg p-4 mb-4">
    <h3 className="text-lg font-bold mb-2">Recommendations</h3>
    <ul className="list-disc pl-5">
      {recommendations.map((rec, index) => (
        <li key={index} className="mb-2">{rec}</li>
      ))}
    </ul>
  </div>
);

const CompetitorComparison = ({ data }) => (
  <div className="bg-white shadow rounded-lg p-4 mb-4">
    <h3 className="text-lg font-bold mb-2">Competitor Comparison</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rating" fill="#8884d8" />
        <Bar dataKey="reviews" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [auditData, setAuditData] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch GMB audit data
    const fetchAuditData = async () => {
      try {
        // Replace this with actual API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({
            completeness: 0.85,
            keywordUsage: 0.70,
            consistency: 0.90,
            sentiment: 0.75,
            recommendations: [
              "Add more photos to your listing",
              "Respond to recent negative reviews",
              "Update your business hours"
            ],
            competitorData: [
              { name: "Your Business", rating: 4.5, reviews: 100 },
              { name: "Competitor A", rating: 4.2, reviews: 80 },
              { name: "Competitor B", rating: 4.7, reviews: 120 }
            ]
          }), 1000)
        );
        setAuditData(response);
      } catch (err) {
        setError('Failed to fetch audit data');
      } finally {
        setLoading(false);
      }
    };

    fetchAuditData();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">GMB Listing Audit Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScoreCard 
          title="Completeness" 
          score={Math.round(auditData.completeness * 100)}
          description="How complete your GMB listing information is."
        />
        <ScoreCard 
          title="Keyword Usage" 
          score={Math.round(auditData.keywordUsage * 100)}
          description="How well you're using relevant keywords."
        />
        <ScoreCard 
          title="Consistency" 
          score={Math.round(auditData.consistency * 100)}
          description="How consistent your listing is across platforms."
        />
        <ScoreCard 
          title="Sentiment" 
          score={Math.round(auditData.sentiment * 100)}
          description="Overall sentiment based on customer reviews."
        />
      </div>

      <div className="mt-8">
        <RecommendationList recommendations={auditData.recommendations} />
      </div>

      <div className="mt-8">
        <CompetitorComparison data={auditData.competitorData} />
      </div>

      <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-8" role="alert">
        <p className="font-bold">Tip</p>
        <p className="text-sm">Regular updates and engaging with customer reviews can significantly improve your GMB listing performance.</p>
      </div>
    </div>
  );
}