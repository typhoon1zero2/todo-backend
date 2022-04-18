/*********************************
 * Set-up mongoose db connection
 *********************************/
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection
    .on('open', () => console.log('Connected to MONGOOSE'))
    .on('close', () =>  console.log('Disconnected from MONGOOSE'))
    .on('error', (error) => console.log(error));


module.exports = mongoose;