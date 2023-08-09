const mongoose = require('mongoose'); // Erase if already required
const bcrypt =require('bcrypt');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    displayname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    type:{
        type:String,
        default:"user",
       
    },
    password:{
        type:String,
        required:true,
    },
});

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isSamePass = async function(suspassword){
    return await bcrypt.compare(suspassword, this.password);
};
//Export the model
module.exports = mongoose.model('User', userSchema);