import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    // Return profile message
    res.json({ message: 'User Profile' });
});

export default router;