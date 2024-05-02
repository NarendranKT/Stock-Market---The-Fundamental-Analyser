import express from 'express';
import cron from 'node-cron';
import newsRouter from './routes/newsRoute.js';
import dbConnect from './configs/dbConnect.js';
import cors from 'cors';
import stockRouter from './routes/stockRoute.js';


const app = express();
const PORT = 8000;

//$ Middlewares
app.use(express.json());

// $Cors
app.use(cors({
    origin:'http://localhost:5173'
}))

// $Routes
app.use('/market/news', newsRouter);
app.use('/market/stock', stockRouter)


//$ Listener
app.listen(PORT, () => {
    console.log("Server is up and running in " + PORT);
})