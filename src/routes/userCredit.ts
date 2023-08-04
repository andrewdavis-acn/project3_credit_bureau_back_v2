import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    // Return credit message
    res.json({ message: 'User Credit' });
});

export default router;