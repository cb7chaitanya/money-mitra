import { API_KEY } from "../conf";
const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      return null;
    }
  };
  export const earnings_symbol=async(req,res)=>{
    const { symbol } = req.params;
    const { horizon = 3 } = req.query; // Default to 3 months if not provided
    const url = `https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&symbol=${symbol}&horizon=${horizon}month&apikey=${API_KEY}`;
    const data = await fetchData(url);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ error: 'Error fetching earnings data' });
    }
  }
  export const ipo=async(req,res)=>{
    const url = `https://www.alphavantage.co/query?function=IPO_CALENDAR&apikey=${API_KEY}`;
    const data = await fetchData(url);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ error: 'Error fetching IPO calendar' });
    }
  }
 export const company_overview=async(req,res)=>{
    const { symbol } = req.params;
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;
    const data = await fetchData(url);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ error: 'Error fetching company overview' });
    }
  }
  export const top_gainers=async(req,res)=>{
    const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`;
    const data = await fetchData(url);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ error: 'Error fetching top gainers, losers, and most active tickers' });
    }
  }
  export const global_quote=async(req,res)=>{
    const { symbol } = req.params;
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    const data = await fetchData(url);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ error: 'Error fetching global quote' });
    }
  }
