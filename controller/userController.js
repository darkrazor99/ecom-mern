const { generateToken } = require('../config/jwToken');
const user = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async (req, res) => {
    const username = req.body.username;
    const findUser = await user.findOne({username:username});
    const email = req.body.email
    const findemail = await user.findOne({email:email});
    if(!findUser && !findemail) {
        // create new  user
        const newUser = await user.create(req.body);
        res.json(newUser);
    } else if(findUser){
        throw new Error("Username Already Used");
    } else {
        throw new Error("Email Already Used");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    // check if use exists 
    const found = await user.findOne({email:email});
    if (found && await found.isSamePass(password)) {
        res.json({
            _id: found?._id,
            username: found?.username,
            displayname: found?.displayname,
            email: found?.email,
            type: found?.type,
            token: generateToken(found?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = await user.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});

const getUser = asyncHandler(async (req, res) => {
    try {
        const {username} = req.body
        const getUser = await user.findOne({username:username});
        res.json(getUser)
    } catch (error) {
        throw new Error(error);
    }
} );

const deletUser = asyncHandler(async (req, res) => {
    try {
        const {username} = req.body
        const getUser = await user.findOneAndDelete({username:username});
        res.json(getUser);
    } catch (error) {
        throw new Error(error);
    }
} );

module.exports = {createUser, loginUser, getAllUsers, getUser, deletUser}; 