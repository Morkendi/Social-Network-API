// Require dependencies
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // Use regex to validate correct email format
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
);

// Virtual 'friendCount' to retrieve length of user's friend
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Create Users Model using the Schema
const Users = model ('Users', userSchema);

module.exports = Users;