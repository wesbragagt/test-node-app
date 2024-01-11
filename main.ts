import http from 'http';

const PORT = 80;
const HOST = process.env.HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
  if (!req.url) {
    return;
  }

  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Test Node App</h1>');
      res.end();
      break;
    case '/crash':
      try {
        throw new Error('Crash server')
      } catch (e) {
        console.error(e);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('<h1>Internal Server Error</h1>');
        res.end();
        process.exit(1);
      }
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>Not Found</h1>');
      res.end();
  }
});


server.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
