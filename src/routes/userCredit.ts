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
    const filePathCredit:string = process.env.CREDIT_PATH as string;
    const filePathCollections:string = process.env.COLLECTIONS_PATH as string;

    // Read in all of the file contents into an array
    // CSV -> JSON
    const results: any[] = [];

    /*
    fs.createReadStream(filePathCredit)
        .pipe(csvParser())
        .on('data', (data: any) => results.push(data))
        .on('end', () => {
            res.json(results);
        })
        .on('error', (error: Error) => {
            res.status(500).json({ error: 'Failed to read the CSV file.' });
    });
    */

    // Return credit message
    //res.json({ message: 'User Credit' });
});

export default router;