const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const path = require('path');

const server = http.createServer((req, res) => {
  const FP = path.join(process.env.HOME, 'sweatycorp2/pages/index.html');
  const FP2 = path.join(process.env.HOME, 'sweatycorp2/pages/info.html');
  const FPS = path.join(process.env.HOME, 'sweatycorp2/style/style.css');
  const FPI = path.join(process.env.HOME, 'sweatycorp2/style/newhara.jpg');
  
  if (req.url === "/") {
	  res.statusCode = 200;
	  res.setHeader("Content-Type", "text/html");
	  fs.readFile(FP, (error, data) => {
	    if (error) {
		    res.writeHead(404);
		    res.write("Error: File not found.");
	    } else {
		    res.write(data)
	    }

	    res.end();
	  });
  }

  if (req.url === "/info") {
	  res.statusCode = 200;
	  res.setHeader("Content-Type", "text/html");
	  fs.readFile(FP2, (error, data) => {
	    if (error) {
		    res.writeHead(404);
		    res.write("Error: File not found.");
	    } else {
		    res.write(data);
	    }
	    res.end();
	  });
  }

  if (req.url === "/style") {
	  res.statusCode = 200;
	  res.setHeader("Content-Type", "text/css");
	  fs.readFile(FPS, (error, data) => {
	    if (error) {
		    res.writeHead(404);
		    res.write("Error: File not found.");
	    } else {
		    res.write(data);
	    }

	    res.end();
	  });
  }

  if (req.url === "/haru") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile(FPI, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Error: File not found.");
      } else {
        res.write(data);
      }

      res.end();
    });
  }
});

const port = process.env.port || 8080;

server.listen(port, console.log(`Server running on port ${port}`));
