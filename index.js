const express = require('express');
const { handleConnectToMongoDB } = require('./connection');
const userRouter = require('./routes/userRouter');


const app = express();
const PORT = 8080;


// Connections

handleConnectToMongoDB('mongodb://127.0.0.1:27017/simplyfi')
.then(() => console.log('mongo connected'));


// Middlewares

app.use(express.json());


// Routers

app.use('/user', userRouter);


app.listen(PORT, console.log(`server started at ${PORT}`));