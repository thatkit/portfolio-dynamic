import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { GithubApiModule } from './github-api/github-api.module';

@Module({
    imports: [RedisCacheModule, GithubApiModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
