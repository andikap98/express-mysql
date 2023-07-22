const express = require('express');
const userController = require('../controller/usersController')

const router = express.Router();

// create - POST
router.post('/', userController.createNewUsers);

// read - GET
router.get('/', userController.getAllUsers);

// update - PATCH
router.patch('/:id', userController.updateUser);

// DELETE - DELETE
router.delete('/:id', userController.deleteUser)



module.exports = router;