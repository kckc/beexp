import { Request, Response, Next, createServer } from "restify";
import * as os from 'os';

function respond(req: Request, res: Response, next: Next) {
    res.send('hello ' + req.params.name + " from " + os.hostname);
    next()
}

var server = createServer();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});