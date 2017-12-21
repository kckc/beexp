import {Request, Response} from 'express';
import * as redis from 'redis';

export function hello (req: Request, res: Response) {
    var r = redis.createClient({
        host: "redis",
        db: 0,
        connect_timeout: 2
    })

    r.incr("counter", (err, number) => {
        if (err)
            res.send('Hello ' + req.params.name + "! redis error");
        else
            res.send('Hello ' + req.params.name + "! Number of visits " + number);
    });
}