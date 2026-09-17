import http from "node:http";

const PORT = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("X-Asena is running!");
}).listen(PORT, "0.0.0.0", () => {
  console.log(`🌐 Render server listening on port ${PORT}`);
});

import "./index.js";
