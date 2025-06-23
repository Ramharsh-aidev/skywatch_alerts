
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

const API_BASE = 'https://api.adsb.lol/api';

app.get('/api/planes', async (req, res) => {
  const lat = 19.0760;
  const lon = 72.8777;
  const radius = 50;
  const url = `${API_BASE}/aircraft/lat/${lat}/lon/${lon}/dist/${radius}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch aircraft data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
