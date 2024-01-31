const mongoose = require('mongoose');
require('dotenv').config()

function connectToMongoDB(){
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('MONGODB CONNECTED')
        })
        .catch((e) => {
            console.log(e)
        });
};

module.exports = connectToMongoDB;