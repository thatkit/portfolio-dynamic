import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubApiService {
  getTopics(): string {
    console.log('Querying data from Github API...');
    return 'Here are your topics';
  }
}
