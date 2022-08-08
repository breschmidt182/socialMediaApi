const router = require('express').Router();
const{
	getAllThoughts,
	getThoughtById,
	createThought,
	editThought,
	deleteThought
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

module.exports = router;