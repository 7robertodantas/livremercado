export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    isFavorite: boolean;
    sellerId: string | null;
}