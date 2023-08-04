import express, { Request, Response } from 'express';
import csvParser from 'csv-parser';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

//router.get('/', (req, res) => { res.status(200) })
router.get('/', (req: Request, res: Response) => {
    // Local files in place of a database connection for demo simplicity
    // Paths saved in .env for conciseness 
    const filePathProfile:string = process.env.PROFILE_PATH as string;

    // Read in all of the file contents into an array
    // CSV -> JSON
    const results: any[] = [];

    fs.createReadStream(filePathProfile)
        .pipe(csvParser())
        .on('data', (data: any) => results.push(data))
        .on('end', () => {
            res.json(results);
        })
        .on('error', (error: Error) => {
            res.status(500).json({ error: 'Failed to read the CSV file.' });
    });

        // Return profile message
    //res.json({ message: 'User Profile' });
});

export default router;