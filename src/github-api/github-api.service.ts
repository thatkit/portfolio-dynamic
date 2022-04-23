import { Injectable } from '@nestjs/common';
import { GithubClient } from 'src/githubClient';
import { User } from 'src/githubClient/types';

@Injectable()
export class GithubApiService {
    private readonly client = new GithubClient();

    async getUser(): Promise<User | string> {
        console.log('Requesting Github API response...');
        const response = await this.client.getUser();

        if (!response) throw new Error('No data received');

        return response;
    }
}
