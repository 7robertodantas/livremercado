import { Router, Request, Response, NextFunction } from 'express';
import { addProductToCart, getCart, isProductInCart, removeProductFromCart, updateProductInCart } from '../repositories/CartRepository';

const router = Router();

/**
 * Retrieve the cart
 */
router.get('/', async (req, res) => {
    const products = await getCart();
    res.status(200).send(products);
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

/**
 * Check if a product exists in the cart
 */
router.get("/products/:productId/exists", async (req: Request, res: Response) => {
    const { productId } = req.params;
  
    if (!productId) {
      res.status(400).send({ message: "Product ID is required" });
      return;
    }
  
    try {
      const exists = await isProductInCart(productId);
      res.status(200).send({ exists });
    } catch (error) {
      res.status(500).send({ message: "Failed to check if the product exists in the cart" });
    }
  });
  

export default router;
