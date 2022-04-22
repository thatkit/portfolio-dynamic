import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { GithubApiModule } from './github-api/github-api.module';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'REDIS_SERVICE',
                transport: Transport.REDIS,
                options: { url: 'redis://localhost:6379' }
            }
        ]),
        // RedisCacheModule,
        GithubApiModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
