export type QueryResult<T> = [error: Error | null, data?: T];

export type MutationResult<T> = [error: Error | null, data?: T];