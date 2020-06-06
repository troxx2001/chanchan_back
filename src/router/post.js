const express = require('express');
const logger = require('morgan');
const db = require('../controller/connection')
const PostModel = require('../models/db-post')



const router = express.Router();

//GET all posts created for any user
router.get('/getAll', async (req, res, next) => {
    try {
        await PostModel.find({}, (err, result) => {
            if (err) {
                res.status(400).send(err)
            }
            res.status(200).send(result)
        })
    } catch (e) {
        res.status(400).send({ error: 1, message: e })
    }
})

//POST create a new post
router.post('/createPost', async (req, res, next) => {
    try {
        const postInfo = new PostModel(req.body)
        await postInfo.save();
        res.status(200).send({ status: "Publicación Creada" })
    } catch (e) {
        res.status(400).send({ error: 1, message: e })
    }
})

//GET posts using queries
router.get('/queries', async (req, res, next) => {
    console.log(req.query)
    const query = PostModel.find();
    query.collection(PostModel.collection);
    req.query.id ? query.where('id').eq(req.query.id) : null;
    req.query.creator_id ? query.where('creator_id').eq(req.query.creator_id) : null;
    req.query.name ? query.where('name').eq(req.query.name) : null;
    const response= await query.exec()
    res.status(200).send(response)
})

module.exports = router