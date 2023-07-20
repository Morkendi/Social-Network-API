// Require Model
const { Users } = require('../models');
const { findOneAndUpdate } = require('../models/User');

// Setup Controller
const userControllers = {
// Setup CRUD Operations
// Users
    // GET all
    async getAllUsers(req, res) {
        try{
            const allUsers = await Users.find({})
            .select('__v')
            .sort({_id: -1});
            res.json(allUsers);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // GET by ID
    async getSingleUser(req, res) {
        try{
            const singleUser = await Users.findOne({_id: req.params.id})
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
        }catch(err){
            res.status(500).json(err);
        }
    },
    // POST new
    async createUser(req, res) {
        try{
            const newUser = await Users.create(req.body);
            res.json(newUser);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // UPDATE with ID
    async updateUser(req, res) {
        try{
            const updateUser = await Users.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true });
            if(!updateUser) {
                res.status(404).json({message: 'No user found with this ID'});
                return;
            }
        }catch(err){
            res.status(500).json(err);
        }
    },
    // DELETE with ID
    async deleteUser(req, res) {
        try{
            const deleteUser = await Users.findOneAndDelete({_id: params.id});
            if(!deleteUser) {
                res.status(404).json({message: 'No user found with this ID'});
                return;
            }
            res.json(deleteUser);
        }catch(err){
            res.status(500).json(err);
        }
    },
// Friends
    // UPDATE with ID
    async updateFriend(req, res) {
        try{
            const addFriend = await Users.findOneAndUpdate({_id: params.id}, {$push: { friends: params.friendId}}, {new: true})
            .populate({path: 'friends', select: ('-__v')})
            .select('-__v');  
            if(!addFriend) {
                res.status(404).json({message: 'No user found with this ID'});
                return;
            }
            res.json(addFriend);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // DELETE with ID
    async deleteFriend(req, res) {
        try{
            const deleteFriend = await Users.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { friends: params.friendId } },
                { new: true });
                if(!deleteFriend) {
                    res.status(404).json({message: 'No user found with this ID'});
                    return;
                }
                res.json(deleteFriend)
        }catch(err){
            res.status(500).json(err);
        }
    },
};

module.exports = userControllers;