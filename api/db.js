const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json'); // Updated to use 'data.json'
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  const handler = server(req, res);
  return handler;
};