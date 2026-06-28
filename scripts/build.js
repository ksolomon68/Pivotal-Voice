#!/usr/bin/env node
// Skip the build if .next is already pre-built (committed to repo).
// On the server, .next is always present so this exits immediately.
// To force a full rebuild locally, run: npm run build:force
const { existsSync } = require('fs');
const { execSync } = require('child_process');

if (existsSync('.next/BUILD_ID')) {
  console.log('Pre-built .next found — skipping build');
  process.exit(0);
}

execSync('next build', { stdio: 'inherit' });
