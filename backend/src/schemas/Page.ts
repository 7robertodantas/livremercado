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
    static of<T>(items: T[], metadata: PageMetadata): Page<T> {
        return {
            ...metadata,
            items: items as T[],
            count: items.length
        };
    }
    static metadata(page: number, size: number, total: number): PageMetadata {
        const totalPages = Math.ceil(total / size);
        const hasNextPage = page + 1 < totalPages;
        const hasPreviousPage = page > 0;

        return {
            total: total,
            currentPage: page,
            nextPage: hasNextPage ? page + 1 : page,
            previousPage: hasPreviousPage ? page -1 : page,
            totalPages: totalPages,
            hasNextPage: hasNextPage,
            hasPreviousPage: hasPreviousPage
        };
    }

}
