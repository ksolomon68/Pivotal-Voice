const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

// ── Auto-build if .next folder is missing (Hostinger pulls from Git, doesn't build) ──
const nextBuildDir = path.join(__dirname, '.next');
if (!dev && !fs.existsSync(nextBuildDir)) {
    console.log('⚙️  .next build not found — running `next build` now...');
    try {
        execSync('npm run build', { stdio: 'inherit', cwd: __dirname });
        console.log('✅ Build complete.');
    } catch (err) {
        console.error('❌ Build failed:', err.message);
        process.exit(1);
    }
}

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error handling', req.url, err);
            res.statusCode = 500;
            res.end('Internal server error');
        }
    })
        .once('error', (err) => {
            console.error(err);
            process.exit(1);
        })
        .listen(port, hostname, () => {
            console.log(`> Ready on http://${hostname}:${port}`);
        });
});
