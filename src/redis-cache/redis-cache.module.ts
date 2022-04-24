// import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import type { RedisClientOptions } from 'redis';
// import * as redisStore from 'cache-manager-redis-store';

// @Module({
//     imports: [
//         CacheModule.register<RedisClientOptions>({
//             // isGlobal: true,
//             store: redisStore,
//             socket: {
//                 host: 'localhost',
//                 port: 6379
//             },
//             ttl: 1
//         })
//     ],
//     providers: [
//         {
//             provide: APP_INTERCEPTOR,
//             useClass: CacheInterceptor
//         }
//     ]
// })
// export class RedisCacheModule {}
