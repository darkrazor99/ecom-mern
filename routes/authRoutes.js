const express = require('express');
const { createUser, loginUser, getAllUsers, getUser, deletUser } = require('../controller/userController');
const router = express.Router();


router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/all-users', getAllUsers);
router.post('/getuser', getUser);
router.delete('/deleteuser', deletUser);
module.exports = router;
