import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const PORT = 3000;
const DB = 'mongodb://127.0.0.1/apiUsers';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(DB)
    .then(() => console.log('BD conectada!'));

import userRouter from './routes/userRouter.js';
import commentRouter from './routes/commentRouter.js'

app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);

app.use((req, res) => {
    res.status(404).json( {msg: 'not found!!' });
});

app.listen(PORT, () =>{
    console.log('Server andando');
});