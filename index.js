// langkah 1 - import
import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './router.js';

const app= express();

// Connect to DB
mongoose.connect(process.env.MONGODB_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connect to DB success')
}).catch(err => {
    console.log('Connect to failed ' + err)
})


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//langkah 3 (routes)
app.get('/', (req,res) => {
    res.json({
        message: 'success',
    });
})

// http://localhost:3000/api/homework
app.use('/api', router);

// langkah 2

const PORT = process.env.PORT || '2000'
app.listen(PORT, () => {
    console.log(`App listens to port ${PORT}`);
})