// Require Models
const { Thoughts, Users } = require('../models');

// Setup Controller
const thoughtControllers = {
// Setup CRUD Operations
// Thoughts
    // GET all
    async getAllThoughts(req,res) {
        try{
            const allThoughts = await Thoughts.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .sort({_id: -1})
            res.json(allThoughts);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // GET by ID
    async getSingleThought(req,res) {
        try{
            const singleThought = await Thoughts.findOne({_id: req.params.id})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            res.json(singleThought);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // POST new
    async createThought(req, res) {
        try{
            const {_id} = await Thoughts.create(req.body);
            const newThought = await Users.findOneAndUpdate(
                {_id: params.userId},
                {$push: {thoughts: _id}},
                {new: true}
            );
            if (!newThought) {
                res.status(404).json({message: 'No thoughts found with this ID!'});
                return;
            }
            res.json(newThought);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // UPDATE with ID
    async updateThought(req, res) {
        try{
            const updateThought = await Thoughts.findOneAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true});
            if(!updateThought) {
                res.status(404).json({message: 'No thought found with this ID'});
                return;
            }
            res.json(updateThought);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // DELETE with ID
    async deleteThought(req, res) {
        try{
            const deleteThought = await Thoughts.findOneAndDelete({_id: req.params.id});
            if(!deleteThought) {
                res.status(404).json({message: 'No thought found with this ID'});
                return;
            }
            res.json(deleteThought);
        }catch(err){
            res.status(500).json(err);
        }
    },
// Reactions
    // UPDATE with ID
    async updateReaction(req, res) {
        try{
            const updateReaction = await Thoughts.findOneAndUpdate({_id: req.params.thoughtId}, {$push: {reactions: req.body}}, {new: true, runValidators: true})
            .populate({path: 'reactions', select: '__v'})
            .select('__v');
            if(!updateReaction) {
                res.status(404).json({message: 'No thoughts found with this ID'});
                return;
            }
            res.json(updateReaction);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // DELETE with ID
    async deleteReaction(req, res) {        try{
            const deleteReaction = await         Thoughts.findOneAndUpdate({_id: params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new : true});
            if(!deleteReaction) {
                res.status(404).json({message: 'No thoughts found with this ID'});
                return;
            }
            res.json(deleteReaction);
        }catch(err){
            res.status(500).json(err);
        }}
};

module.exports = thoughtControllers;