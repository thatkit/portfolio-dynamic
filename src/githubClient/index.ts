/* eslint-disable prettier/prettier */
import { graphql } from '@octokit/graphql';
// import type { RepositoryConnection } from './schema.docs.graphql';

class GithubClient {
  userRepos;

  get getUser() {
    this.userRepos = async () => await graphql(
      `
        {
          user(login: "thatkit") {
            repositories(first: 100) {
              nodes {
                name
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
    return this.userRepos;
  }

} 
