import { Router } from 'express';
import { getProductById, getProducts } from '../repositories/ProductRepository';
import { createProduct } from '../repositories/ProductRepository';

const router = Router();

/**
 * Retrieve all products
 */
router.get('/', async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 0;
    const size = req.query.size ? parseInt(req.query.size as string, 10) : 10;
    const products = await getProducts(page, size);
    res.status(200).send(products);
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

export default router;