const mongoose = require('mongoose')
exports.DatabaseConnection = () => {
    mongoose.connect("mongodb://localhost:27017/OnlineShop",{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Database is on");
        })
        .catch(() => {
            console.log("Database is off", error);
        })  
} 
