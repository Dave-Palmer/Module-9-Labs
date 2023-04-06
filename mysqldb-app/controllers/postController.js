"use strict";
const Models = require("../models");


const getPosts = (res) => {
    Models.Post.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getCommentsForPost = (req, res) => {
    let { postId } = req.params
    console.log(postId + 'hello')
    Models.Comment.findAll({
        where: {
            postId: postId
        }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createPost = (data, res) => {
    Models.Post.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updatePost = (req, res) => {
    Models.Post.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const deletePost = (req, res) => {
    Models.Post.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
module.exports = {
    getPosts, createPost, updatePost, deletePost, getCommentsForPost
}