const express = require('express');

const router = express.Router();

const postController = require('../controller/postsController.js')

//Index
router.get('/', postController.index);

//Show
router.get('/:id', postController.show);

//Create
router.post('/', postController.store);

//Update
router.put('/:id', postController.update);

//Modify
router.patch('/:id', postController.modify);

//Delete
router.delete('/:id', postController.destroy);

module.exports = router;

