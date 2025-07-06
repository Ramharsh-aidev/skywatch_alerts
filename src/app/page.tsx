import LiveRadar from '@/components/map/LiveRadar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">SkyWatch Alerts ✈️</h1>
        <div className="flex space-x-4">
          <Link href="/alerts" className="text-blue-500 hover:underline">My Alerts</Link>
          <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4">
        <LiveRadar />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Real-time flight tracking with proximity alerts
        </p>
      </div>
    </main>
  );
}