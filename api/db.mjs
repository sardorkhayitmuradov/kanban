import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default (req, res) => {
  const handler = server(req, res);
  return handler;
};