import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">About SkyWatch Alerts</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Track live flights and get alerts when aircraft are near your location.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Real-time flight tracking</li>
          <li>Custom proximity alerts</li>
          <li>Historical flight data</li>
        </ul>
        
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Live Radar
        </Link>
      </div>
    </main>
  );
}