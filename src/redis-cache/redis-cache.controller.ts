import { CACHE_MANAGER, Controller, Inject } from '@nestjs/common';
import type { Cache } from 'cache-manager';

@Controller('redis-cache')
export class RedisCacheController {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
}
