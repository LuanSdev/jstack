const http = require('http');
const { URL } = require('url');

const routes = require('./routes');

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(`http://localhost:3333${req.url}`);

  let { pathname } = parsedUrl;
  let id = null;

  const splitEndpoint = pathname.split('/').filter(Boolean);

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const router = routes.find(
    (route) => route.endpoint === pathname && route.method === req.method
  );

  if (router) {
    req.params = { id };
    req.query = Object.fromEntries(parsedUrl.searchParams);

    res.send = (statusCode, body) => {
      res.writeHead(statusCode, {
        'content-type': 'application/json',
      });

      res.end(JSON.stringify(body));
    };

    router.handler(req, res);
  } else {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.end(`Cannot get ${parsedUrl.pathname}`);
  }
});

server.listen(3333, () => console.log('Server is running'));
