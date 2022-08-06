const {User} = require('../models/index');

const userController = {
	getAllUsers(req, res) {
		User.find({})
		.then(dbAllUserData => res.status(200).json(dbAllUserData))
		.catch(err => 
			{console.log(err);
			res.status(400).json(err);
		});
	},

	getUserById({params}, res) {
		User.findOne({_id: params.id})
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({message:"It appears there is no user with that id! 😶"});
				return;
			}
			res.status(200).json(dbUserData);
		})
		.catch(err => res.status(400).json(err))
	},

	createUser({body}, res) {
		User.create(body)
		.then(dbNewUser => {
			if(!req.body.username) {
				res.status(404).json({message:"You need a username!"})
				return;
			}
			if(!req.params.password) {
				res.status(404).json({message:"A password is required"})
				return;
			}
			res.status(200).json(dbNewUser, {message: "Thanks for making an account! :)"})
		})
		.catch(err => res.status(400).json(err))
	},

	updateUser({params, body}, res) {
		User.findOneAndUpdate({_id: params.id}, body, {new: true})
		.then(dbUpdatedUser => {
			if(!dbUpdateUserData) {
				res.status(404).json({message:"There is no user with that id! Please try again"});
				return;
			}
			res.status(200).json(dbUpdatedUser, {message:"User updated successfully!"})
		})
		.catch(err => res.status(400).json(err));
	},

	deleteUser({params}, res) {
		User.findOneAndDelete({_id: params.id})
		.then(dbDeleteUserData => {
			if(!dbDeleteUserData) {
				res.status(404).json({message:"There is no user with that id"});
				return;
			}
			res.status(200).json(dbDeleteUserData, {message: "User deleted"})
		})
		.catch(err => res.status(400).json(err));
	}

};

module.exports = userController;