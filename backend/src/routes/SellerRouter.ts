import { Router } from 'express';
import { createSeller, getSellerById, getSellersPages, updateSeller, deleteSeller, getSellers } from '../repositories/SellerRepository';

const router = Router();

router.get('/', async (req, res) => {
    const sellers = await getSellers();
    res.status(200).send(sellers);
});

/**
 * Retrieve all sellers
 */
router.get('/', async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 0;
    const size = req.query.size ? parseInt(req.query.size as string, 10) : 10;
    const sellers = await getSellersPages(page, size);
    res.status(200).send(sellers);
});

/**
 * Create a new seller
 */
router.post('/', async (req, res) => {
    try {
        const seller = await createSeller(req.body);
        res.status(201).send(seller);
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes('UNIQUE constraint failed: seller.id')) {
                res.status(409).send({ message: 'Seller ID already exists' });
            } else {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        } else {
            res.status(500).send({ message: 'Unknown Error' });
        }
    }
});

/**
 * Retrieve a seller by ID
 */
router.get('/:id', async (req, res) => {
    const seller = await getSellerById(req.params.id);
    if (seller == null) {
        res.status(404).send({ message: 'Seller not found' });
        return;
    }
    res.status(200).send(seller);
});

/**
 * Update seller information
 */
router.patch('/:id', async (req, res) => {
    try {
        const updates = req.body;
        const seller = await getSellerById(req.params.id);

        if (seller == null) {
            res.status(404).send({ message: 'Seller not found' });
            return;
        }

        await updateSeller(req.params.id, updates);
        res.status(200).send({ message: 'Seller updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

/**
 * Delete a seller
 */
router.delete('/:id', async (req, res) => {
    try {
        const seller = await getSellerById(req.params.id);

        if (seller == null) {
            res.status(404).send({ message: 'Seller not found' });
            return;
        }

        await deleteSeller(req.params.id);
        res.status(200).send({ message: 'Seller deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

export default router;
