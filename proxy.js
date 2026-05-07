#!/usr/bin/env node
/**
 * Stdio ↔ HTTP proxy for the CoinMarketCap MCP server.
 *
 * Auth priority:
 *   1. CMC_API_KEY env var  → passed as X-CMC-MCP-API-KEY header
 *   2. (unset)              → mcp-remote triggers OAuth browser flow
 */

import { spawn } from 'child_process';

const CMC_MCP_URL = 'https://mcp.coinmarketcap.com/mcp';

// npx -y pulls mcp-remote from the npm cache (or downloads it once) so this
// works even when the extension directory has no node_modules.
const npxArgs = ['-y', 'mcp-remote@0.1.38', CMC_MCP_URL];
if (process.env.CMC_API_KEY) {
  npxArgs.push('--header', `X-CMC-MCP-API-KEY:${process.env.CMC_API_KEY}`);
}

const child = spawn('npx', npxArgs, { stdio: 'inherit' });
child.on('exit', code => process.exit(code ?? 0));
child.on('error', err => {
  process.stderr.write(`[coinmarketcap-proxy] Failed to start npx: ${err.message}\n`);
  process.exit(1);
});
