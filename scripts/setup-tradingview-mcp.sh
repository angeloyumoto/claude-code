#!/usr/bin/env bash
# Set up the TradingView MCP server for Claude Code.
#
# Usage: ./scripts/setup-tradingview-mcp.sh [install-dir]
#   install-dir defaults to ~/tradingview-mcp
#
# After running, launch TradingView Desktop with its debug port enabled
# (see the launch scripts inside the cloned repo), restart Claude Code,
# and ask it to run tv_health_check.
set -euo pipefail

INSTALL_DIR="${1:-$HOME/tradingview-mcp}"
REPO_URL="https://github.com/tradesdontlie/tradingview-mcp.git"

if [ -d "$INSTALL_DIR/.git" ]; then
  echo "==> $INSTALL_DIR already exists, pulling latest"
  git -C "$INSTALL_DIR" pull --ff-only
else
  echo "==> Cloning $REPO_URL to $INSTALL_DIR"
  git clone "$REPO_URL" "$INSTALL_DIR"
fi

echo "==> Installing dependencies"
npm install --prefix "$INSTALL_DIR"

echo "==> Registering MCP server with Claude Code"
claude mcp remove tradingview >/dev/null 2>&1 || true
claude mcp add tradingview -- node "$INSTALL_DIR/src/server.js"

cat <<EOF

Done. Next steps:
  1. Start TradingView Desktop with the debug port on:
       Mac:     $INSTALL_DIR/scripts/launch_tv_debug_mac.sh
       Windows: $INSTALL_DIR\\scripts\\launch_tv_debug.bat
       Linux:   $INSTALL_DIR/scripts/launch_tv_debug_linux.sh
  2. Restart Claude Code.
  3. Ask Claude to run tv_health_check — a green result means it is connected.
EOF
