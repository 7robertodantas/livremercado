import { Router } from 'express';
import { getCart } from '../repositories/CartRepository';

const router = Router();

router.get('/', async (req, res) => {
    const products = await getCart();
    res.status(200).send(products);
});

export default router;