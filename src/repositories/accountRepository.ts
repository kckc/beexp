import * as redis from 'redis';

/**
 * handles account creation and retrieve
 */
export class accountRepository {
    private _redis: redis.RedisClient;

    consturctor(dbHost: string)
    {
        this._redis = redis.createClient({
            host:dbHost
        })
    }

    public addAccount(name: string)
    {
        this._redis.sadd('accounts', name);
        let key = ['account',name].join(':');
        this._redis.rpush(key, "0");
    }
}