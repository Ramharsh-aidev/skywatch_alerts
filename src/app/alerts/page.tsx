'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([
    { id: 1, name: 'Nearby Flights', distance: 5, active: true },
  ]);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Flight Alerts</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Alerts</h2>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              const newId = alerts.length > 0 ? Math.max(...alerts.map(a => a.id)) + 1 : 1;
              setAlerts([...alerts, {
                id: newId,
                name: `New Alert ${newId}`,
                distance: 5,
                active: true
              }]);
            }}
          >
            Add Alert
          </button>
        </div>
        
        <div className="space-y-4">
          {alerts.map(alert => (
            <div key={alert.id} className="border p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{alert.name}</h3>
                  <p>Alert when within {alert.distance} km</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={alert.active}
                    onChange={() => setAlerts(alerts.map(a => 
                      a.id === alert.id ? {...a, active: !a.active} : a
                    ))}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Live Radar
          </Link>
        </div>
      </div>
    </main>
  );
}