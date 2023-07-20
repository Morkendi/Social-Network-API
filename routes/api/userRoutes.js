const router = require('express').Router();

// Require controllers
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    updateFriend,
    deleteFriend
} = require('../../controllers/userController')