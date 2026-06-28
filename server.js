const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || '0.0.0.0';

process.on('unhandledRejection', (reason, promise) => {
    console.error('REAL UNHANDLED REJECTION:', reason ? (reason.stack || reason) : reason);
});
process.on('uncaughtException', (err) => {
    console.error('REAL UNCAUGHT EXCEPTION:', err ? (err.stack || err) : err);
});

// cPanel Passenger passes a Unix socket path string in process.env.PORT.
// If it's a number, parse it. Otherwise, use it as a string socket path.
const rawPort = process.env.PORT || '3000';
const isSocket = isNaN(Number(rawPort));
const port = isSocket ? rawPort : parseInt(rawPort, 10);

const app = next({ dev, hostname, port: isSocket ? 3000 : port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = createServer(async (req, res) => {
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
    });

    if (isSocket) {
        server.listen(port, () => {
            console.log(`> Ready on Unix Socket: ${port}`);
        });
    } else {
        server.listen(port, hostname, () => {
            console.log(`> Ready on http://${hostname}:${port}`);
        });
    }
});

