import { Router } from 'express';
import { getProductById, getProducts } from '../repositories/ProductRepository';

const router = Router();

router.get('/', async (req, res) => {
    const products = await getProducts();
    res.status(200).send(products);
});

router.get('/:id', async (req, res) => {
    const products = await getProductById(req.params.id);
    res.status(200).send(products);
});

export default router;