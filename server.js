const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if ('coins' in params) {
      const heads = 0
      const tails = 1
      const flip = Math.floor(Math.random() * 2)
      if (params['coins'] == 'heads' && flip === tails) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          result: 'YOU LOST'
        }
        res.end(JSON.stringify(objToJson));
      }
      else if (params['coins'] == 'tails' && flip === heads) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          result: "YOU LOST"
        }
        res.end(JSON.stringify(objToJson));
      }

      else if (params['coins'] == 'heads' && flip === heads) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          result: "YOU WIN!!!"
        }
        res.end(JSON.stringify(objToJson));
      }
        // http://localhost:8000/api?coins=tails
      else if (params['coins'] == 'tails' && flip === tails) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          result: "YOU WON!!!"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == '/style.css') {
    console.log('start reading css data.')
    fs.readFile('style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      console.log('finshed writing main.js')
      res.end();

    });
  }
  //   else{
  //     figlet('404!!', function(err, data) {
  //       if (err) {
  //           console.log('Something went wrong...');
  //           console.dir(err);
  //           return;
  //       }
  //       res.write(data);
  //       res.end();
  //     });
  //   }
});

server.listen(8000);
