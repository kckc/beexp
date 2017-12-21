import * as express from 'express';
import * as helloCtlr from '../controller/helloController'

var server = express();

server.get('/health', (req, res) => res.send({status:"ok"}));

server.head('/hello/:name', helloCtlr.hello);
server.get('/hello/:name', helloCtlr.hello);

export default server;
