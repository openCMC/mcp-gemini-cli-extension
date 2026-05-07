#!/usr/bin/env node
/**
 * Stdio ↔ HTTP proxy for the CoinMarketCap MCP server.
 *
 * Auth priority:
 *   1. CMC_API_KEY env var  → passed as X-CMC-MCP-API-KEY header
 *   2. (unset)              → mcp-remote triggers OAuth browser flow
 */

import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const mcpRemoteBin = join(__dirname, 'node_modules', '.bin', 'mcp-remote');

const CMC_MCP_URL = 'https://mcp.coinmarketcap.com/mcp';

const args = [CMC_MCP_URL];
if (process.env.CMC_API_KEY) {
  args.push('--header', `X-CMC-MCP-API-KEY:${process.env.CMC_API_KEY}`);
}

const child = spawn(mcpRemoteBin, args, { stdio: 'inherit' });
child.on('exit', code => process.exit(code ?? 0));
child.on('error', err => {
  process.stderr.write(`[coinmarketcap-proxy] Failed to start mcp-remote: ${err.message}\n`);
  process.exit(1);
});
