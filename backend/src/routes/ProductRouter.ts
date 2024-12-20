import { Router } from 'express';
import { getProductById, getProducts, updateProductFavorite } from '../repositories/ProductRepository';
import { createProduct } from '../repositories/ProductRepository';
import { Page } from '../schemas/Page';
import { Product } from '../schemas/Product';

const router = Router();

/**
 * Retrieve all products
 */
router.get('/', async (req, res) => {
    const page : number = req.query.page ? parseInt(req.query.page as string, 10) : 0;
    const size : number = req.query.size ? parseInt(req.query.size as string, 10) : 10;
    const search : string = req.query.search ? req.query.search as string : '';
    const productsPage : Page<Product> = await getProducts(page, size, search);
    res.status(200).send(productsPage);
});

/**
 * Create a new product
 */
router.post('/', async (req, res) => {
    try {
        const product = await createProduct(req.body);
        res.status(201).send(product);
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes('UNIQUE constraint failed: product.id')) {
                res.status(409).send({ message: 'Product ID already exists' });
            } else {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        } else {
            res.status(500).send({ message: 'Unknown Error' });
        }
    }
});

/**
 * Retrieve a product by ID
 */
router.get('/:id', async (req, res) => {
    const product = await getProductById(req.params.id);
    if (product == null) {
        res.status(404).send({ message: 'Product not found' });
        return;
    }
    res.status(200).send(product);
});

/**
 * Update isFavorite status for a product
 */
router.patch('/:id/favorite', async (req, res) => {
    try {
        const { isFavorite } = req.body;

        if (typeof isFavorite !== 'boolean') {
            res.status(400).send({ message: '`isFavorite` must be a boolean value' });
            return;
        }

        const product = await getProductById(req.params.id);
        if (product == null) {
            res.status(404).send({ message: 'Product not found' });
            return;
        }

        await updateProductFavorite(req.params.id, isFavorite);
        res.status(200).send({ message: 'Product favorite status updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

export default router;