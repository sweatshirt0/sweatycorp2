const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	fs.readFile("/home/sweatshirt/sweatycorp2/pages/index.html", (error, data) => {
	    if (error) {
		res.writeHead(404);
		res.write("Error: file not found.");
	    } else {
		res.write(data)
	    }

	    res.end();
	});
    }
});

const port = process.env.port || 8080;

server.listen(port, console.log(`Server running on port ${port}`));
