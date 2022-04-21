import { graphql } from '@octokit/graphql';

const { repos } = graphql(`
  repos(username: "thatkit")
`);
