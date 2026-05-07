# CoinMarketCap Extension for Gemini CLI

The CoinMarketCap extension for Gemini CLI brings real-time and historical cryptocurrency market data to your command line. Query prices, market caps, exchange data, trending coins, and more — without leaving your terminal.

## Prerequisites

You will need either:

- A **CoinMarketCap API key** (`X-CMC-MCP-API-KEY`), or
- A **CoinMarketCap account** for OAuth-based authentication (a browser window will open on first use)

## Installation

Install the extension by running the following command from your terminal:

```
gemini extensions install https://github.com/openCMC/mcp-gemini-cli-extension
```

## Authentication

### API Key (recommended)

After installation, set your API key via the extension settings:

```
gemini extensions settings coinmarketcap
```

When prompted for **CoinMarketCap API Key**, enter your key. It is stored securely in your system keychain and injected at runtime.

Alternatively, export it as an environment variable before running Gemini CLI:

```
export CMC_API_KEY=your_api_key_here
```

### OAuth

If no API key is configured, a browser window will open automatically on first use to complete OAuth sign-in. This is handled transparently by the extension.

## Usage

Once installed, you can ask Gemini about crypto market data naturally. Here are some examples:

**Get the current price of a coin:**

> "What is the current price of Bitcoin?"

**Check market leaders:**

> "Show me the top 10 coins by market cap."

**Track volume and momentum:**

> "What's the 24h trading volume for Ethereum?"
> "Which coins are trending right now?"

**Explore listings:**

> "List all new coins added in the last 7 days."

**Get macro market data:**

> "What is the current crypto Fear & Greed index?"
> "What are today's global crypto market stats?"

**Historical OHLCV data:**

> "Give me OHLCV data for SOL over the last 30 days."

## Resources

- [CoinMarketCap API Documentation](https://coinmarketcap.com/api/documentation/v1/): Full reference for available data endpoints.
- [GitHub Issues](https://github.com/openCMC/mcp-gemini-cli-extension/issues): Report bugs or request features.

## Important Security Consideration: Indirect Prompt Injection Risk

When exposing any language model to untrusted data, there is a risk of an [indirect prompt injection attack](https://en.wikipedia.org/wiki/Prompt_injection).

- Never use this extension alongside untrusted tools in the same session.
- Always review actions taken by Gemini CLI on your behalf to ensure they align with your intentions.
- Your API key grants access to your CoinMarketCap account quota — do not share it or commit it to source control.

## 📄 Legal

- **License**: [Apache License 2.0](./LICENSE)
- **Terms of Service**: [CoinMarketCap Terms](https://coinmarketcap.com/terms/)
- **Privacy Policy**: [CoinMarketCap Privacy Policy](https://coinmarketcap.com/privacy/)
