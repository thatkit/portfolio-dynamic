import { Controller, Get } from '@nestjs/common';
import { GithubApiService } from './github-api.service';

@Controller('github-api')
export class GithubApiController {
    constructor(private readonly githubApiService: GithubApiService) {}

    @Get('topics')
    getTopics(): string {
        return this.githubApiService.getTopics();
    }
}
