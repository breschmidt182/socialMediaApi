const router = require('express').Router();
const{
	getAllThoughts,
	getThoughtById,
	createThought,
	editThought,
	deleteThought,
	createReaction,
	deleteReaction
} = require('../../controllers/thoughtController');

router
	.route('/')
	.get(getAllThoughts)
	.post(createThought)

router
	.route('/:id')
	.get(getThoughtById)
	.put(editThought)
	.delete(deleteThought)

router
	.route('/:id/reactions/')
	.post(createReaction)

router
	.route('/:id/reactions/:id')
	.delete(deleteReaction)
	
module.exports = router;