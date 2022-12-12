const express = require('express');
const app = express();
const cors = require('cors');
const TodoRouter = require('./routes/TodoRoutes')
const userRouter = require('./routes/userRoutes')
app.use(express.json()); 
app.use(cors({
    origin : "*"
}));
app.use('/api/v1/Todo',TodoRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;