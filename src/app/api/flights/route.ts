import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const radius = searchParams.get('radius') || '50';

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Missing lat/lon parameters' },
      { status: 400 }
    );
  }

  try {
    const apiUrl = `https://api.adsb.lol/v2/point/${lat}/${lon}/${radius}`;
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'SkyWatchAlerts/1.0'
      },
      next: { revalidate: 10 } // Cache for 10 seconds
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';