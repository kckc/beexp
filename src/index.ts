import { Request, Response, Next, createServer } from "restify";
import * as os from 'os';
import * as redis from 'redis';

function respond(req: Request, res: Response, next: Next) {
    let r = redis.createClient({
        host: "redis",
        db: 0,
        connect_timeout: 2
    });
    
    r.incr("counter", (err, number) => {
        if (err)
            res.send('hello ' + req.params.name + " from " + os.hostname + os.EOL
                + "visits: " + "redis error");
        else
            res.send('hello ' + req.params.name + " from " + os.hostname + os.EOL
                + "visits: " + number);
        next();
    });
}

var server = createServer();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});