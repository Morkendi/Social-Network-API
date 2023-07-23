// Require Models
const { Thoughts, Users } = require('../models');
const { updateUser } = require('./userController')

// Setup Controller
const thoughtControllers = {
// Setup CRUD Operations
// Thoughts
    // GET all
    async getAllThoughts(req,res) {
        try{
            const allThoughts = await Thoughts.find({})
            .select('-__v')
            res.json(allThoughts);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // GET by ID
    async getSingleThought(req,res) {
        try{
            const singleThought = await Thoughts.findOne({_id: req.params.thoughtId})
            .select('-__v');
            if (!singleThought) {
                res.status(404).json({message: 'No thoughts found with this ID!'});
                return;
            }
            res.json(singleThought);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // POST new
    async createThought(req, res) {
        try{
            const createThought = await Thoughts.create(req.body);
            const updateUser = await Users.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: createThought._id}},
                {new: true}
            )

            if (!updateUser){
                return res.status(404).json({message: 'No user found with this ID!'})
            }

            res.json(updateUser)
        } catch(err){
            res.status(500).json(err)
        }
    },
    // UPDATE with ID
    async updateThought(req, res) {
        try{
            const updateThought = await Thoughts.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {new: true, runValidators: true});

            if(!updateThought) {
                res.status(404).json({message: 'No thought found with this ID'});
                return;
            }

            res.json(updateThought);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // DELETE with ID
    async deleteThought(req, res) {
        try{
            const deleteThought = await Thoughts.findOneAndDelete(
                {_id: req.params.thoughtId});

            if(!deleteThought) {
                res.status(404).json({message: 'No thought found with this ID'});
                return;
            }

            res.json(deleteThought);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
// Reactions
    // UPDATE with ID
    async updateReaction(req, res) {
        try{
            const updateReaction = await Thoughts.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet : {reactions: req.body}},
                {runValidators: true, new: true});

            if(!updateReaction) {
                res.status(404).json({message: 'No thoughts found with this ID'});
                return;
            }

            res.json(updateReaction);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },
    // DELETE with ID
    async deleteReaction(req, res) {        
        try{
            const deleteReaction = await Thoughts.findOneAndUpdate(
                {_id: req.params.thoughtId}, 
                {$pull: {reactions: {reactionId: req.params.reactionId}}}, 
                {new : true});

            if(!deleteReaction) {
                res.status(404).json({message: 'No thoughts found with this ID'});
                return;
            }
            
            res.json(deleteReaction);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }}
};

module.exports = thoughtControllers;