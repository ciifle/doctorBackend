import express from "express";
import ConnectToDb from "./database/db.js";
import userRoutes from './routes/userRoutes.js';
import docenv from 'dotenv';


const app = express();
docenv.config()
ConnectToDb();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users/',userRoutes)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})