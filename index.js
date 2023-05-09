const http = require('http');
const app = require("./index.js");

const port = port.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})