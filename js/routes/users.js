var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
/* GET todo listing. */
router.get('/', function(req, res, next) {
    model.User.findAll({})
        .then(todos => res.json({
            error: false,
            data: todos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* POST todo. */
router.post('/', function(req, res, next) {
    model.User.create(req.body)
    .then(todo => res.status(201).json({
        error: false,
        data: todo,
        message: 'New todo has been created.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});
 
 
/* update todo. */
router.put('/:id', function(req, res, next) {
    const todo_id = req.params.id;
 
    model.User.update(req.body, {
            where: {
                id: todo_id
            }
        })
        .then(todo => res.json({
            error: false,
            message: 'todo has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* GET todo listing. */
router.delete('/:id', function(req, res, next) {
    const todo_id = req.params.id;
    model.User.destroy({ where: {
        id: todo_id
    }})
        .then(status => res.json({
            error: false,
            message: 'todo has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
module.exports = router;
