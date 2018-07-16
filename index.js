// require the server and router modules
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// assign the collection of request handlers 
// as an object
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);