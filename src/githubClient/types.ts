/* eslint-disable prettier/prettier */
export class User {
    repositories: RepositoryConnection;
}

export class RepositoryConnection {
    nodes?: Nullable<Nullable<Repository>[]>;
}

export class Repository {
    description?: Nullable<string>;
    homepageUrl?: Nullable<URI>;
    id: string;
    name: string;
    repositoryTopics: RepositoryTopicConnection;
    url: URI;
}

export class RepositoryTopicConnection {
    nodes?: Nullable<Nullable<RepositoryTopic>[]>;
}

export class RepositoryTopic {
    id: string;
    topic: Topic;
}

export class Topic {
    id: string;
    name: string;
}

export type URI = any;

type Nullable<T> = T | null;