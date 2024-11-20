import { Product } from "./Product";

export interface CartItem {
    index: number;
    product: Product;
    quantity: number;
}