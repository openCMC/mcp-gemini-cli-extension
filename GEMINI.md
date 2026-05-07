# CoinMarketCap Extension

This extension connects Gemini CLI to the official **CoinMarketCap MCP server** at `https://mcp.coinmarketcap.com/mcp`, giving you real-time and historical crypto market data as tools.

## Authentication

| Method | How |
|--------|-----|
| API Key | Set `CMC_API_KEY` via `gemini extensions settings coinmarketcap` |
| OAuth   | Leave `CMC_API_KEY` unset — a browser window will open on first use |

## What you can ask

- Current prices and market caps for any cryptocurrency
- Top N coins by market cap, volume, or gainers/losers
- Exchange information and trading pairs
- Historical OHLCV data for charting
- Fear & Greed index, global market stats
- New listings and trending coins

## Example prompts

```
What is the current price of Bitcoin?
Show me the top 10 coins by market cap.
What's the 24h trading volume for Ethereum?
List all coins added in the last 7 days.
What is the current crypto Fear & Greed index?
Give me OHLCV data for SOL over the last 30 days.
```

## Tool naming

All tools are provided by the `coinmarketcap-market-data` MCP server and are automatically available once the extension is loaded.
