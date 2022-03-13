const http = require('http');
const { URL } = require('url');

const routes = require('./routes');

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(`http://localhost:3333${req.url}`);

  const router = routes.find(
    (route) =>
      route.endpoint === parsedUrl.pathname && route.method === req.method
  );

  if (router) {
    req.query = Object.fromEntries(parsedUrl.searchParams);

    router.handler(req, res);
  } else {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.end(`Cannot get ${parsedUrl.pathname}`);
  }
});

server.listen(3333, () => console.log('Server is running'));
