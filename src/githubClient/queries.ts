/* eslint-disable prettier/prettier */
export const GET_USER_WITH_REPOS = `
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
`;