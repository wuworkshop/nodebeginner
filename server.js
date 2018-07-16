// require the http and url modules
var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  /* 
  * Call the createServer method to start the
  * HTTP server and pass it onRequest as the
  * callback function. Have the server listen 
  * at port 8888
  */
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

// export the start function so other
// scripts can require it
exports.start = start;