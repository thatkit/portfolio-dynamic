import { Injectable } from '@nestjs/common';
import { GithubClient } from 'src/githubClient';
import { User } from 'src/githubClient/types';

@Injectable()
export class GithubApiService {
    client = new GithubClient();

    getTopics(): User {
        console.log('Querying data from Github API...');
        this.client.fetchUser();
        return this.client.getUser;
    }
}
