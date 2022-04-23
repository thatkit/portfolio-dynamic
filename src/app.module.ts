import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { GithubApiModule } from './github-api/github-api.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInteceptor } from './transform-inteceptor.interceptor';

@Module({
    imports: [RedisCacheModule, GithubApiModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInteceptor
        }
    ]
})
export class AppModule {}
