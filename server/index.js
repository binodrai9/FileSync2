import express from 'express';

import router from './route/routes.js';

import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();
app.use(cors());//write before router

app.use('/', router);



const PORT = 8000;
DBConnection();

app.listen(PORT, () => console.log('Server is running on PORT 8000 '));


