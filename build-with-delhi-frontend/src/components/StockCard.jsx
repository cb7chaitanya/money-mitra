import React from 'react';

const TickerCard = ({ data }) => {
  const { metadata, last_updated, top_gainers, top_losers, most_actively_traded } = data;

  return (
    <div className="p-4 mb-4 bg-zinc-800 border text-white border-gray-300 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{metadata}</h2>
        <p className="text-sm">Last updated: {last_updated}</p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Top Gainers</h3>
        <ul>
          {top_gainers.map((gainer, index) => (
            <li key={index} className="mb-2">
              <strong>Ticker:</strong> {gainer.ticker} <br />
              <strong>Price:</strong> ${gainer.price} <br />
              <strong>Change:</strong> ${gainer.change_amount} ({gainer.change_percentage}) <br />
              <strong>Volume:</strong> {gainer.volume}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Top Losers</h3>
        <ul>
          {top_losers.map((loser, index) => (
            <li key={index} className="mb-2">
              <strong>Ticker:</strong> {loser.ticker} <br />
              <strong>Price:</strong> ${loser.price} <br />
              <strong>Change:</strong> ${loser.change_amount} ({loser.change_percentage}) <br />
              <strong>Volume:</strong> {loser.volume}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Most Actively Traded</h3>
        <ul>
          {most_actively_traded.map((ticker, index) => (
            <li key={index} className="mb-2">
              <strong>Ticker:</strong> {ticker.ticker} <br />
              <strong>Price:</strong> ${ticker.price} <br />
              <strong>Change:</strong> ${ticker.change_amount} ({ticker.change_percentage}) <br />
              <strong>Volume:</strong> {ticker.volume}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TickerCard;
