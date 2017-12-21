import * as express from 'express';
import * as os from 'os';
import * as redis from 'redis';
import * as helloCtlr from './controller/helloController';

var server = express();
server.get('/health', (req, res) => res.send({status:"ok"}));

server.get('/hello/:name', helloCtlr.hello);
server.head('/hello/:name', helloCtlr.hello);

server.listen(3000, function() {
    console.log('server running at port 3000');
});