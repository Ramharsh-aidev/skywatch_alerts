import LiveRadar from '@/components/map/LiveRadar';
import FlightErrorBoundary from '@/components/map/FlightErrorBoundary';

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">SkyWatch Alerts ✈️</h1>
      
      <FlightErrorBoundary>
        <div className="bg-white rounded-xl shadow-lg p-4">
          <LiveRadar />
        </div>
      </FlightErrorBoundary>
      
      {<main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">SkyWatch Alerts ✈️</h1>
      <div className="bg-white rounded-xl shadow-lg p-4">
        <LiveRadar />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Real-time flight tracking with proximity alerts
        </p>
        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
          <h2 className="font-bold text-blue-800">Coming Soon:</h2>
          <p>Set alerts when flights approach your location!</p>
        </div>
      </div>
    </main>
  }
    </main>
  );
}