// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = '2AAOG9Z8LMHLWC5X';

// Function to fetch data from Alpha Vantage API
const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return null;
  }
};

// Endpoint to get expected earnings for a single stock
app.get('/earnings/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const { horizon = 3 } = req.query; // Default to 3 months if not provided
  const url = `https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&symbol=${symbol}&horizon=${horizon}month&apikey=${API_KEY}`;
  const data = await fetchData(url);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Error fetching earnings data' });
  }
});

// Endpoint to get IPO calendar
app.get('/ipo-calendar', async (req, res) => {
  const url = `https://www.alphavantage.co/query?function=IPO_CALENDAR&apikey=${API_KEY}`;
  const data = await fetchData(url);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Error fetching IPO calendar' });
  }
});

// Endpoint to get company overview
app.get('/overview/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;
  const data = await fetchData(url);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Error fetching company overview' });
  }
});

// Endpoint to get top gainers, losers, and most active tickers
app.get('/top-gainers-losers', async (req, res) => {
  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`;
  const data = await fetchData(url);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Error fetching top gainers, losers, and most active tickers' });
  }
});

// Endpoint to get historical options data
app.get('/historical-options/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const { date } = req.query; // Optional date parameter
  const url = `https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=${symbol}&date=${date}&apikey=${API_KEY}`;
  const data = await fetchData(url);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Error fetching historical options data' });
  }
});

// Endpoint to get global quote
app.get('/global-quote/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
  const data = await fetchData(url);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Error fetching global quote' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
