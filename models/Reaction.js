const {Schema, model, ObjectId} = require('mongoose');

const ReactionSchema = new Schema({
	reactionId: {
  	type: ObjectId,
    default: ObjectId.new
  },

	reactionBody: {
  	type: String,
    required: "Don't forget to add some text!",
    maxlength: 280
  },

  userId: {
  	type: Schema.Types.ObjectId,
    ref: 'User'
  },

	thoughtId: {
		type: Schema.Types.ObjectId,
		ref:'Thought'
	},

  createdAt: {
  	type: Date,
    default: Date.now,
    timestamps: true
}});

module.exports = ReactionSchema;