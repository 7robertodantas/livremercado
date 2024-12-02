'use client';

import { addProductToCart, deleteCartItem, getCart, updateCartItem } from '@/services/checkout';
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
    containsProduct: defaultError,
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
    containsProduct: (productId: string) => boolean;
    addProduct: (productId: string) => void;
    updateQuantity: (productId: string, newQuantity: number) => void;
    removeProduct: (productId: string) => void;
}

export const CartContext = createContext<CartContextType>(empty);

const CartContextProvider = ({ children } : ChildrenProps) => {
    const [cartItems, setCartItems] = useState<Page<CartItem>>(PageFactory.emptyPage());
    const cart = { 
        items: cartItems.items, 
        totalItems: cartItems.total, 
        totalValue: cartItems.items.reduce((total, { product, quantity }) => total + product.price * quantity, 0), 
        async refresh() {
            const items = await getCart();
            setCartItems(items);
        },
        containsProduct(productId) {
            return this.items.some(item => item.product.id == productId);
        },
        async addProduct(productId) {
            await addProductToCart(productId);
            this.refresh();
        },
        async updateQuantity(productId, newQuantity) {
            await updateCartItem(productId, newQuantity);
            this.refresh();
        },
        async removeProduct(productId) {
            await deleteCartItem(productId);
            this.refresh();
        }
    } as CartContextType;


    useEffect(() => {
        cart.refresh();
    }, []);

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartContextProvider;