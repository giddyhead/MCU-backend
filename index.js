const express = require('express');
const app = express();
// const path = require('path');
const logger = require('morgan')
const connectToMongoDB = require('./db/mongodb');
require('dotenv').config();

// prevennt CORS issue
const cors = require('cors')

// Give access to any orgin
const corsOptions ={
    origin: "*",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

// // Set view engine to EJS
// app.set('view engine', 'ejs');
// // Set view engine to look at the 'views' folder
// app.set('views', path.join(__dirname, 'views'));
// // Use the 'public' folder to read static files such as CSS
// app.use(express.static(path.join(__dirname, 'public')));
// // Read incoming requests properly
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// logs requests to the server
app.use(logger('dev'))

const McuRouter = require('./routes/McuRouter');
// localhost:3001/Mcu...
app.use('/Mcu', McuRouter);


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);

    connectToMongoDB();
});