const router = require('express').Router();
const{
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	removeFriend,
	addFriend
} = require('../../controllers/userController')

router
	.route('/')
	.get(getAllUsers)
	.post(createUser)

router
	.route('/:id')
	.get(getUserById)
	.put(updateUser)
	.delete(deleteUser)

router
	.route('/:id/friends/')
	.post(addFriend)

router
	.route('/:id/friends/:friendId')
	.delete(removeFriend)

module.exports = router;