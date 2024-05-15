const mongoose = require('mongoose');

const ConnectDB = async () => {

        await mongoose.connect('mongodb://localhost:27017/urlshort')
        .then(() => {console.log("MongoDB Connected");})
        .catch((err) =>{console.error(`MongoDB Connection Failed ${err}`)})
};

module.exports = {
    ConnectDB
};