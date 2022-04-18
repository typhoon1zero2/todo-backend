/*
    Imports Routers 
*/
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

/*****************************************************/
/*
    C-R-U-D
    Create, Read, Update, Delete
*/
/****************************************************/

/****************************************************************************************
 *  Read route -  GET `/` route that finds and returns everything in the todo database
 *****************************************************************************************/
router.get('/', ( req, res ) => {
    Todo.find({}, (err , foundTodo) => {
        if(!err) {
            res.status(200).json(foundTodo);
        }else {
            res.status(400).json(err);
        }
    });
});


/************************************************** 
 * TO DO Route (TABLE)
****************************************************/
router.get('/table', (req, res) =>{
    Todo.find({}, (err, foundTodo) => {
        if(!err) {
            const formattedData = foundTodo.reduce((acc, item ) =>{
                acc[item.status] = acc[item.status]
                ? [...acc[item.status], item]
                : [item];
                return acc;
            }, {});
                res.status(200).json(formattedData);
        }else {
                res.status(400).json(err);
        }
    })
})



/****************************************************************
 *  Create route - POST route to create a todo using  req.body
 *  return a status and the created todo
 ***************************************************************/
router.post('/', ( req, res ) => {
    const { body } = req;

    Todo.create(body, ( err, createdTodo) => {
        if(!err){
            res.status(200).json({ message: `You've created your task!!`, createdTodo: createdTodo });
        }else {
            res.status(400).json(err);
        }
    })
})

/********************************************
 *  Update Route
 ********************************************/
router.put('/:id', ( req, res ) => {
    const{ body } = req;
    Todo.findByIdAndUpdate (
        req.params.id,
        body,
        { new : true },
        ( err, updatedTodo ) => {
            if(!err) {
                res.status(200).json(updatedTodo);
            } else {
                res.status(400).send(err);
            }
        }
    )
})



/*********************************************
 *  Delete Route
 ********************************************/
router.delete('/:id', ( req, res ) =>{
    Todo.findByIdAndDelete(req.params.id, (err) => {
        if(!err) {
            res.status(200).json( { message: `You've deleted this task` });
        }else {
            res.status(400).send(err);
        }
    });
});



/*********************************************
 *  Show Page
 ********************************************/
router.get('/:id', ( req, res ) => {
    Todo.findById( req.params.id, (err, foundTodo) =>{
        if(!err) {
            res.status(200).json(foundTodo);
        }
    })
})


module.exports = router;