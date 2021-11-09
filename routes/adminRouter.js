const express = require('express')
const { addBlog } = require('../controllers/adminController')

const router = express.Router();

router.post('/add-post', addBlog);

module.exports = {
    routers: router
}