const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4200; //  chose port from here like 8080, 3001
console.log("serverport:",port)

server.use(middlewares);
server.use(router);

server.listen(port);