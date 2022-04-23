import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransformedRepository } from './githubClient/types';

@Injectable()
export class TransformInteceptor implements NestInterceptor {
    repositoryTopics: any;
    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<TransformedRepository[]> {
        return next.handle().pipe(
            map(data => {
                return data.user.repositories.nodes.map(data => ({
                    ...data,
                    repositoryTopics: data.repositoryTopics.nodes.map(
                        ({ topic }) => topic.name
                    )
                }));
            })
        );
    }
}
