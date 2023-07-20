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
} = require('../../controllers/userController');

// Users GET all & POST
router.route('/').get(getAllUsers).post(createUser);

// Users GET single, PUT & DELETE
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// Friends POST & DELETE
router.route('/:id/friends/:friendId').post(updateFriend).delete(deleteFriend);

module.exports = router;