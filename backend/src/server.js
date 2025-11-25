import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use((req, res, next) => {
    console.log(`Request:${req.method} | URL:${req.url} | Time:${new Date().toISOString()}`);
    next();
});
app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

