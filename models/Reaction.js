const {Schema, model} = require('mongoose');

const ReactionSchema = new Schema({
    child: new Schema({
        reactionId: {
        type: ObjectId,
        default: ObjectId.new
    },

    reactionBody: {
        type: String,
        required: "Don't forget to add some text!",
        maxlength: 280
    },

    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    createdAt: {
        type: Date,
        default: Date.now,
        timestamps: true
    }})
})

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;