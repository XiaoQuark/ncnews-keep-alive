coneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkcHV5ZWhybnZ1Ymt3Y3RjcGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNjA0MTgsImV4cCI6MjAzMjczNjQxOH0.6ioszJm8EdsrHM9hduJKoyoYutwWqdWVmO0MInx6AE8st express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

const SUPABASE_URL = 'https://kdpuyehrnvubkwctcpkw.supabase.co'; // Replace with your Supabase URL
const SUPABASE_API_KEY = process.env.SUPABASE_KEY; // Supabase API Key from environment variable

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${SUPABASE_URL}/rest/v1/articles`, {
      headers: {
        apikey: SUPABASE_API_KEY,
        Authorization: `Bearer ${SUPABASE_API_KEY}`
      }
    });
    res.status(200).send('Ping successful');
  } catch (error) {
    res.status(500).send('Ping failed');
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
