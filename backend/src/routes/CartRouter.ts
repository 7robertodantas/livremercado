import { Router, Request, Response, NextFunction } from 'express';
import { addProductToCart, getCartItems, getCartMetadata, removeProductFromCart, updateProductInCart } from '../repositories/CartRepository';

const router = Router();

/**
 * Retrieve the cart
 */
router.get('/', async (req, res) => {
    const page : number = req.query.page ? parseInt(req.query.page as string, 10) : 0;
    const size : number = req.query.size ? parseInt(req.query.size as string, 10) : 10;
    const items = await getCartItems(page, size);
    res.status(200).send(items);
});

/**
 * Retrieve pagination metadata for products in the cart
 */
router.get('/metadata', async (req, res) => {
    try {
        const page : number = req.query.page ? parseInt(req.query.page as string, 10) : 0;
        const size : number = req.query.size ? parseInt(req.query.size as string, 10) : 10;
        const metadata = await getCartMetadata(page, size);
        res.status(200).send(metadata);
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve cart metadata' });
    }
});

/**
 * Add a product to the cart
 */
router.post('/products', async (req, res) => {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
        res.status(400).send({ message: 'Product ID and quantity are required' });
        return;
    }

    try {
        const updatedCart = await addProductToCart(productId, quantity);
        res.status(200).send(updatedCart);
        return;
    } catch (error) {
        res.status(409).send({ message: 'Failed to add product to cart' });
        return;
    }
});

/**
 * Update product quantity from the cart
 */
router.put('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
        res.status(400).send({ message: 'Quantity is required' });
        return;
    }

    try {
        await updateProductInCart(productId, quantity);
        res.status(204).send();
        return;
    } catch (error) {
        res.status(409).send({ message: 'Failed to update product in cart' });
        return;
    }
});

/**
 * Remove a product from the cart
 */
router.delete('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        await removeProductFromCart(productId);
        res.status(204).send();
    } catch (error) {
        res.status(409).send({ message: 'Failed to remove product from cart' });
    }
});

export default router;
