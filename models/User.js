//copied from my previous repo. Had to start over so copied models over to new repo
const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    minlength: 4,
    required: 'Please come up with a username'
	},

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/]
	}, 

  friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
	],

  thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }
	]
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = UserSchema;