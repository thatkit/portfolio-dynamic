import { Injectable } from '@nestjs/common';
import { GithubClient } from 'src/githubClient';
import { User } from 'src/githubClient/types';

@Injectable()
export class GithubApiService {
    client = new GithubClient();

    async getTopics(): Promise<User | string> {
        const response = await this.client.getUser();

        if (!response) throw new Error('No data received');

        return response;
    }
}
