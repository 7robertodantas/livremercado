import { Cart } from '@/types/Cart';
import { createContext } from 'react';

export interface CartContextType {
    total: number;
    setTotal: (total: number) => void;
}

export const CartContext = createContext<CartContextType>({
    total: 0,
    setTotal: () => {},
});
