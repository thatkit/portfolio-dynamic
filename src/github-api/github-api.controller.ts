import { Controller, Get } from '@nestjs/common';
import { User } from 'src/githubClient/types';
import { GithubApiService } from './github-api.service';

@Controller('github-api')
export class GithubApiController {
    constructor(private readonly githubApiService: GithubApiService) {}

    @Get('topics')
    getTopics(): User {
        return this.githubApiService.getTopics();
    }
}
