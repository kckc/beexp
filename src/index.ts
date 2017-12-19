import * as express from 'express';
import * as os from 'os';
import * as redis from 'redis';

function respond(req: express.Request, res: express.Response) {
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
    });
}

var server = express();
server.get('/health', (req, res) => res.send({status:"ok"}));

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000, function() {
    console.log('server running at port 3000');
});