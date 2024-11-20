import { Router } from 'express';

const router = Router();

router.get('*', async (req, res) => {
    res.status(404).send({
        status: 404,
        message: 'Not Found'
      })
});

export default router;