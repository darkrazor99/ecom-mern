const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        const conn = mongoose.connect("mongodb+srv://firstUser:Lqsda5wFggCZbjPt@cluster0.cyl8rxt.mongodb.net/mern1");
        console.log("database connected succesfuly");
    } catch (error) {
        console.log("Database error");
        
    }
};

module.exports = dbConnect;