// Require dependencies
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
    // Set a custom ID
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use Moment.js
        get: (createdDate) => moment(createdDate).format('DD/MM/YYYY[at] HH:mm:ss') 
    }},
    {
    toJSON: {
        getters: true
    }});

const thoughtSchema = new Schema (
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use Moment.js
        get: (createdDate) => moment(createdDate).format('DD/MM/YYYY[at] HH:mm:ss')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
);

// Virtual 'reactionCount' to retrieve length of reaction's array
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Create Thoughts Model using the Schema
const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;