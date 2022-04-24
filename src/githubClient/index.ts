/* eslint-disable prettier/prettier */
import { graphql, GraphqlResponseError } from '@octokit/graphql';
import { User } from '../github-api/types';
import 'dotenv/config';
import { GET_USER_WITH_REPOS } from './queries';

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`
  }
});

export class GithubClient {
  user: User;
  error: string;

  async getUser () {
    try {
      this.user = await graphqlWithAuth(GET_USER_WITH_REPOS);
      return this.user;
    }
    
    catch(err) {
      err instanceof GraphqlResponseError
        ? this.error = err.errors[0].message
        : this.error = err.name;
      return this.error;
    }
  }

} 
