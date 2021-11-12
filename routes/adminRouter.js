const express = require('express')
const { addBlog, getAllPosts, updateOnePost, deleteOnePost } = require('../controllers/adminController')

const router = express.Router();

router.post('/add-post', addBlog);
router.get('/all-posts', getAllPosts);
router.put('/update-post/:id', updateOnePost);
router.delete('/delete-post/:id', deleteOnePost);

module.exports = {
    routers: router
}