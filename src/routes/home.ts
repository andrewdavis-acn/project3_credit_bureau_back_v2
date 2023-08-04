import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    // Return home message
    res.json({ message: 'Welcome Home' })
});

export default router;