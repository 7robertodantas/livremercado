export interface PageMetadata {
    total: number;
    currentPage: number;
    nextPage: number;
    previousPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface Page<T> extends PageMetadata {
    items: T[];
    count: number;
}

export class PageFactory {
    static emptyPage<T>(): Page<T> {
        return {
            items: [],
            count: 0,
            total: 0,
            currentPage: 0,
            totalPages: 0,
            nextPage: 0,
            previousPage: 0,
            hasNextPage: false,
            hasPreviousPage: false
        };
    }
}
