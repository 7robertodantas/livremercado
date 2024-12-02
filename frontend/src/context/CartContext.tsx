import { deleteCartItem, getCart, updateCartItem } from '@/services/checkout';
import { ChildrenProps } from '@/types';
import { CartItem } from '@/types/CartItem';
import { Page, PageFactory } from '@/types/Page';
import { createContext, useContext, useEffect, useState } from 'react';

const error: Error = Error("CartContextProvider is missing");

const defaultError = () => { throw error; }

const empty = {
    items: [],
    totalValue: 0,
    totalItems: 0,
    refresh: defaultError,
    addProduct: defaultError,
    updateQuantity: defaultError,
    removeProduct: defaultError
} as CartContextType;

export interface CartContextType {
    items: CartItem[];
    totalValue: number;
    totalItems: number;
    refresh: () => void;
    addProduct: (productId: string) => void;
    updateQuantity: (productId: string, newQuantity: number) => void;
    removeProduct: (productId: string) => void;
}

export const CartContext = createContext<CartContextType>(empty);

const CartContextProvider = ({ children } : ChildrenProps) => {
    const [cart, setCart] = useState<Page<CartItem>>(PageFactory.emptyPage());
    const value = { 
        items: cart.items, 
        totalItems: cart.total, 
        totalValue: cart.items.reduce((total, { product, quantity }) => total + product.price * quantity, 0), 
        refresh: () => {
            loadCart();
        },
        addProduct(productId) {
            const found = this.items.find(item => item.product.id === productId);
            if (found) {
                this.updateQuantity(productId, found.quantity + 1)
            } else {
                updateCartItem(productId, 1);
            }
            this.refresh();
        },
        updateQuantity(productId, newQuantity) {
            updateCartItem(productId, newQuantity);
            this.refresh();
        },
        removeProduct(productId) {
            deleteCartItem(productId);
            this.refresh();
        }
    } as CartContextType;

    const loadCart = async () => {
        const items = await getCart();
        setCart(items);
    }

    useEffect(() => {
        loadCart();
    }, []);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartContextProvider;