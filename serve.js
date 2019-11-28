const fs = require("fs");
const net = require("net");
const http = require("http");
const https = require("https");
const path = require("path");
const express = require("express");
const compression = require("compression");
const baseAddress = 3036; // этот адрес необходимо сказать пользователю
const redirectAddress = 9696; // служебный адрес http. по прямому обращению не работает
const httpsAddress = 9697; // служебный адрес https. по прямому обращению работает

const config = {
  keys: {
    privkey: "/etc/letsencrypt/live/apps.elem.ru/privkey.pem",
    cert: "/etc/letsencrypt/live/apps.elem.ru/cert.pem",
    chain: "/etc/letsencrypt/live/apps.elem.ru/chain.pem",
  },
  keys_dev: {
    privkey: "./k/privkey13.pem",
    cert: "./k/cert13.pem",
    chain: "./k/chain13.pem",
  },
}
// нормальный https сервер, раздающий статику
const app = express()
app.use(compression())
app.use(express.static(path.join(__dirname, "/dist")));
app.get("*", (req, res, next) => res.sendFile(path.join(__dirname, "/dist/index.html")));
const credentials = {
  key: fs.readFileSync(config.keys.privkey, "utf8"),
  cert: fs.readFileSync(config.keys.cert, "utf8"),
  ca: fs.readFileSync(config.keys.chain, "utf8"),
}
const server = https.createServer(credentials, app);
server.listen(httpsAddress, () => {
  console.log("t3: Vue.js static https server started at port", httpsAddress);
});

// пользовательский проксирующий сервер
net.createServer(tcpConnection).listen(baseAddress, () => {
  console.log("t3: Vue.js static base server started at port", baseAddress);
});

function tcpConnection(conn) {
  conn.once("data", function (buf) {
    // A TLS handshake record starts with byte 22.
    var address = (buf[0] === 22) ? httpsAddress : redirectAddress;
    var proxy = net.createConnection(address, function () {
      proxy.write(buf);
      conn.pipe(proxy).pipe(conn);
    });
  });
}

// http проксирующий сервер
http.createServer(httpConnection).listen(redirectAddress, () => {
  console.log("t3: Vue.js static redirect server started at port", redirectAddress);
});
function httpConnection(req, res) {
  var host = req.headers["host"];
  res.writeHead(301, { "Location": "https://" + host + req.url });
  res.end();
}
