const http = require('http');
const routes = require('./routes');

const server = http.createServer((req, res) => {
  const router = routes.find(
    (route) => route.endpoint === req.url && route.method === req.method
  );

  if (router) {
    router.handler(req, res);
  } else {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.end(`Cannot get ${req.url}`);
  }
});

server.listen(3333, () => console.log('Server is running'));
