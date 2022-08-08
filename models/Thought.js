const {Schema, model, ObjectId} = require('mongoose');
const User = require('./User');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema({
	title: {
  	type: String,
  	trim: true,
  	required: 'Title of your thought is required!!'
	},

	thought: {
  	type: String,
  	trim: true,
  	minlength: 4,
  	required: 'Make sure to share your thought!'
	},

	username: {
  	type: Schema.Types.ObjectId,
  	ref: 'User'
	},

	createdAt: {
  	type: Date,
  	default: Date.now
	},

	reactions: [reactionSchema],
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

module.exports = ThoughtSchema;