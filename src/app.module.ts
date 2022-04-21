import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { GithubApiModule } from './github-api/github-api.module';
import { GithubApiController } from './github-api/github-api.controller';
import { GithubApiService } from './github-api/github-api.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_SERVICE',
        transport: Transport.REDIS,
        options: { url: 'redis://localhost:6379' },
      },
    ]),
    // RedisCacheModule,
    GithubApiModule,
  ],
  controllers: [AppController, GithubApiController],
  providers: [AppService, GithubApiService],
})
export class AppModule {}
