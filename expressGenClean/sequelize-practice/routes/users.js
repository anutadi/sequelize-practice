// all models are required into the file.
// These models are objects created by Sequelize
// and defined by you in the 'model' file
var models = require('../models');

var express = require('express');
var router = express.Router();


// When adding or removing from the database
// you will be dealing directly with Sequelize objects only.
// Sequelize will deal with the relational database.
// This is where 'Object-Relational Mapping' gets it's name.


// create new User
router.post('/create', function(req, res) {
	// write handler for adding users
	// modeling it off of the Task handlers
});

// destroy User
router.get('/:user_id/destroy', function(req, res) {
	// write handler for destroying users
	// modeling it off of the Task handlers
});

// create Task
router.post('/:user_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

// destroy Task
router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

// add handlers for Friend

module.exports = router;
