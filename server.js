/******************************
 *  Imports Dependencies
 *****************************/
require('dotenv').config();//Always require and configure near the top
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const todoController = require('./controllers/todo');




/*********************************
 *  Middleware
 *********************************/
app.use(cors());
app.use(express.json());
app.use('/todos', todoController);


/*********************************
 *  Listening PORT
 *********************************/
app.listen(PORT, () => {
    `I am running on PORT: ${PORT}`;
})