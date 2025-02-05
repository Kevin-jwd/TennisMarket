let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = new URL(request.url, `http://${request.headers.host}`).pathname; 
        let queryData = new URL(request.url, `http://${request.headers.host}`).searchParams; 
        route(pathname, handle, response, queryData.get("productId"));
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start;
