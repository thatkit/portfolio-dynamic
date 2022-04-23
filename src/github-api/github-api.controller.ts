import { Controller, Get } from '@nestjs/common';
import { User } from 'src/githubClient/types';
import { GithubApiService } from './github-api.service';

@Controller('github-api')
export class GithubApiController {
    constructor(private readonly githubClient: GithubApiService) {}

    @Get('topics')
    getUser(): Promise<User | string> {
        return this.githubClient.getUser();
    }
}
