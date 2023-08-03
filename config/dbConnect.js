const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.mongoDbUrl);
        console.log("database connected succesfuly");
    } catch (error) {
        console.log("Database error");
        
    }
};

module.exports = dbConnect;
