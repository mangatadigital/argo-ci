import * as http from 'http';

export interface Repository {
    cloneUrl: string;
    fullName: string;
}

export interface ScmEvent {
    repository: Repository;
    headCommitSha: string;
    type: 'push' | 'pull_request';
}

export interface CommitStatus {
    state: 'error' | 'failure' | 'pending' | 'success';
    targetUrl: string;
    description: string;
}

export interface Scm {
    parseEvent(request: http.IncomingMessage): Promise<ScmEvent>;
    addCommitStatus(event: ScmEvent, status: CommitStatus);
}