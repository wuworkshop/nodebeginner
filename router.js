function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  // check if a request handler exist for the
  // given pathname
  if (typeof handle[pathname] === 'function') {
    // call the request handler function
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("404 Not found");
    response.end();
  }
}

// export the route function
exports.route = route;