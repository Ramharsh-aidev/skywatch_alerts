import { FlightData } from '@/types/flight';

export async function fetchNearbyFlights(
  lat: number,
  lon: number,
  radius: number = 250
): Promise<FlightData[]> {
  try {
    const params = new URLSearchParams({
      lat: lat.toString(),
      lon: lon.toString(),
      radius: radius.toString()
    });

    const response = await fetch(`/api/flights?${params}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP Error ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.ac?.map((flight: any) => ({
      icao24: flight.hex,
      callsign: flight.flight?.trim() || 'N/A',
      latitude: flight.lat,
      longitude: flight.lon,
      altitude: flight.alt_baro,
      velocity: flight.gs,
      heading: flight.track,
      category: flight.category,
      squawk: flight.squawk,
      timestamp: flight.timestamp
    })) || [];
  } catch (error) {
    console.error('Flight API Error:', error);
    throw error;
  }
}