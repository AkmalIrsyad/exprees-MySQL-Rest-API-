const express = require("express");
const route = express.Router();

const usersController = require("../controller/users");

// Create - POST
route.post('/', usersController.createNewUser);

// READ - GET
route.get('/', usersController.getAllUsers);

// READ - GET by id
route.get('/:id', usersController.getUsersByid);

// UPDATE -PACTH
route.patch('/:id', usersController.updateUser);

// Delete - DELETE
route.delete('/:id', usersController.deleteUser)


module.exports = route;