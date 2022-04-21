import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheController } from './redis-cache.controller';

@Module({
    imports: [CacheModule.register()],
    controllers: [RedisCacheController]
})
export class RedisCacheModule {}
