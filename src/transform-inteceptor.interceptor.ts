import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransformedRepository, TransformedResponse } from './github-api/types';

@Injectable()
export class TransformInteceptor implements NestInterceptor {
    repositoryTopics: any; // # any type
    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<TransformedResponse> {
        return next.handle().pipe(
            map(data => ({
                repos: data.user.repositories.nodes.map(repoInfo => ({
                    ...repoInfo,
                    repositoryTopics: repoInfo.repositoryTopics.nodes.map(
                        ({ topic }) => topic.name
                    )
                })),
                topicsList: ['hello', 'and', 'bye']
            }))
        );
    }
}
