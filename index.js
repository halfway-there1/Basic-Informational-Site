const http = require('http');
const fs = require('fs/promises');

http
  .createServer(async function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const path = req.url;
    console.log(path);

    let fileName = './404.html';
    if (path === '/') {
      fileName = './index.html';
    } else if (path === '/about') {
      fileName = './about.html';
    } else if (path === '/contact-me') {
      fileName = './contact-me.html';
    }

    let html = await fs.readFile(fileName, 'utf-8');
    res.write(html);
    res.end();
  })
  .listen(8080);
