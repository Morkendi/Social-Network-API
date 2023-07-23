// Require Model
const { Users } = require('../models');

// Setup Controller
const userControllers = {
// Setup CRUD Operations
// Users
    // GET all
    async getAllUsers(req, res) {
        try{
            const allUsers = await Users.find({})
            .populate({path: 'thoughts', select: '-__v'})
            .populate({path: 'friends', select: '-__v'})
            .select('__v');

            res.json(allUsers);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // GET by ID
    async getSingleUser(req, res) {
        try{
            const singleUser = await Users.findOne({_id: req.params.userId})
            .select('-__v')
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            });

        if(!singleUser) {
            res.status(404).json({message: 'No user found with this ID'});
            return;
        }

        res.json(singleUser);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // POST new
    async createUser(req, res) {
        try{
            const newUser = await Users.create(req.body);

            res.json(newUser);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // UPDATE with ID
    async updateUser(req, res) {
        try{
            const updateUser = await Users.findOneAndUpdate(
                { _id: req.params.userId },
                {$set: req.body}, 
                { new: true, runValidators: true });

            if(!updateUser) {
                res.status(404).json({message: 'No user found with this ID'});
                return;
            }

            res.json(updateUser);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // DELETE with ID
    async deleteUser(req, res) {
        try{
            const deleteUser = await Users.findOneAndDelete({_id: req.params.userId});

            if(!deleteUser) {
                res.status(404).json({message: 'No user found with this ID'});
                return;
            }

            res.json(deleteUser);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
// Friends
    // UPDATE with ID
    async updateFriend(req, res) {
        try{
            const addFriend = await Users.findOneAndUpdate(
                {_id: req.params.userId}, 
                {$push: { friends: req.params.friendId}}, 
                {new: true, runValidators: true});

            if(!addFriend) {
                res.status(404).json({message: 'No user found with this ID'});
                return;
            }

            res.json(addFriend);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // DELETE with ID
    async deleteFriend(req, res) {
        try{
            const deleteFriend = await Users.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true });

                if(!deleteFriend) {
                    res.status(404).json({message: 'No user found with this ID'});
                    return;
                }
                
                res.json(deleteFriend)
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
};

module.exports = userControllers;