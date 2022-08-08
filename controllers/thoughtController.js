const {Thought} = require('../models/');

const thoughtController = {
	getAllThoughts(req, res) {
		Thought.find({})
		.then(dbAllThoughtData => res.status(200).json(dbAllThoughtData))
		.catch(err => res.status(400).json(err));
	},

	getThoughtById(req, res) {
		Thought.findOne({_id: params.id})
		.then(dbThoughtData => {
			if(!dbThoughtData) {
				res.status(404).json({message:"There is no thought with that id"});
				return;
			}
			res.status(200).json(dbThoughtData)
		})
		.catch(err => res.status(400).json(err));
	},

	createThought({body}, res) {
		Thought.create(body)
		.then(dbNewThought => {
			if(!req.body.title) {
				res.status(404).json({message:"Your thought needs a title!"});
				return;
			}
			res.status(200).json(dbNewThought)
			if(!req.body.thought) {
				res.status(404).json({message:"You need to put text in your thought!"});
				return;
			}
			res.status(200).json(dbNewThought,{message:"New thought created!"});
		})
		.catch(err => res.status(400).json(err));
	},

	editThought({params, body}, res) {
		Thought.findOneAndUpdate({_id: params.id}, body, {new: true})
		.then(dbEditThought => {
			if(!dbEditThought) {
				res.status(404).json({message:"There is no thought with that id"});
				return;
			}
			res.status(200).json(dbEditThought, {message:"Thought edited"})
		})
		.catch(err => res.status(400).json(err));
	},

	deleteThought({params}, res) {
		Thought.findOneAndDelete({_id: params.id})
		.then(dbDeleteThought => {
			if(!dbDeleteThought) {
				res.status(404).json({message:"There is no thought with that id"});
				return;
			}
			res.status(200).json(dbDeleteThought, {message:"Thought deleted"})
		})
		.catch(err => res.status(400).json(err));
	}
};

module.exports = thoughtController;