// Entry Point: server.ts
// Modules are Javascript/Typescript files or directories of files that have, reusable, exported and imported code
// The import statement is used to pull the module into the current file, or even other module
// The import statement provides a modern, live, alternative to 'const object = require('object')' static version
import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();
const port = 3000;

// Middleware
// After instantiation and configuration I like to add in the middleware that is used
app.use(cors());

// Define routes here
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});