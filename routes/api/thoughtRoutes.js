const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    updateReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Thoughts GET all & POST
router.route('/')
.get(getAllThoughts)
.post(createThought);

// Thoughts GET single, PUT & DELETE
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// Reactions POST & DELETE
router.route('/:thoughtId/reactions')
.post(updateReaction)
.delete(deleteReaction);

module.exports = router;