/* eslint-disable prettier/prettier */
import { graphql } from '@octokit/graphql';
import { User } from './types';

export class GithubClient {
  user: User;

  constructor() {}

  async fetchUser() {
    this.user = await graphql(
      `
        {
          user(login: "thatkit") {
            repositories(first: 100) {
              nodes {
                url
                name
                description
                homepageUrl
                repositoryTopics(first: 100) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      `
    );
  }

  get getUser() {
    return this.user;
  }

} 
