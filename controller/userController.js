const user = require('../models/userModel');

const createUser = async (req, res) => {
    const username = req.body.username;
    const findUser = await user.findOne({username:username});
    const email = req.body.email
    const findemail = await user.findOne({email:email})
    if(!findUser && !findemail) {
        // create new  user
        const newUser = await user.create(req.body);
        res.json(newUser);
    } else if(findUser){
        res.json({
            msg:"Username Alredy Existss",
            success: false
        });
    } else {
        res.json({
            msg:"Email Already Used",
            success: false
        });
    }
};

module.exports = {createUser}; 