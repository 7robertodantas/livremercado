export interface Page<T> {
    items: T[];
    count: number;
    total: number;
    currentPage: number;
    nextPage: number;
    previousPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export class PageFactory {
    static of<T>(page: number, size: number, items: T[], total: number): Page<T> {
        const totalPages = Math.ceil(total / size);
        const hasNextPage = page + 1 < totalPages;
        const hasPreviousPage = page > 0;

        return {
            items: items as T[],
            count: items.length,
            total: total,
            currentPage: page,
            nextPage: hasNextPage ? page + 1 : page,
            previousPage: hasPreviousPage ? page -1 : page,
            totalPages: totalPages,
            hasNextPage: hasNextPage,
            hasPreviousPage: hasPreviousPage
          }
    }
}
