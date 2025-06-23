'use client';
import { useState, useEffect } from 'react';

export default function ApiStatus() {
  const [status, setStatus] = useState<'loading' | 'online' | 'offline'>('loading');
  const [rateLimit, setRateLimit] = useState({ used: 0, remaining: 0 });
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkApiStatus = async () => {
    try {
      const response = await fetch('https://api.adsb.lol/stats', {
        headers: { 'Accept': 'application/json' }
      });
      
      if (!response.ok) throw new Error('API offline');
      
      const stats = await response.json();
      setStatus('online');
      setRateLimit({
        used: stats.requests_served,
        remaining: stats.requests_remaining
      });
      setLastChecked(new Date());
    } catch (error) {
      setStatus('offline');
      setLastChecked(new Date());
    }
  };

  useEffect(() => {
    checkApiStatus();
    const interval = setInterval(checkApiStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 border text-sm max-w-xs">
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-2 ${
          status === 'online' ? 'bg-green-500' : 
          status === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
        }`}></div>
        <span className="font-medium">
          {status === 'online' ? 'Flight API Online' : 
           status === 'offline' ? 'Flight API Offline' : 'Checking API...'}
        </span>
      </div>
      
      {status === 'online' && (
        <div className="mt-2 text-xs">
          <div className="grid grid-cols-2 gap-1">
            <div>Requests used:</div>
            <div className="font-mono">{rateLimit.used}</div>
            <div>Remaining:</div>
            <div className="font-mono">{rateLimit.remaining}</div>
          </div>
        </div>
      )}
      
      <div className="mt-1 text-xs text-gray-500">
        {lastChecked && `Last checked: ${lastChecked.toLocaleTimeString()}`}
      </div>
    </div>
  );
}