const firebase = require('firebase')
const db = require('../db')
const firestore = firebase.firestore()


const addBlog = async (req, res, next) => {
    try {
        const data = req.body
        await firestore.collection('posts').doc().set(data)
        res.send('New Post added successfully')
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const getAllPosts = async (req, res, next) => {
    try{
        const posts = await firestore.collection('posts');
        const data = await posts.get();
        const postArray = []
        if (data.empty) {
            res.status(400).send('No post is found');
        } else {
            data.forEach(doc => {
                let ele = doc.data()
                ele['id'] = doc.id
                postArray.push(ele);
            })
            res.send(postArray)
        }
    }catch(err){
        res.status(400).send(err.message)
    }
}

const updateOnePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data  = req.body;
        const post = await firestore.collection('posts').doc(id)
        await post.update(data)
        res.send('Post updated successfully');
    } catch (err) {
        res.status(400).send('Update failed')
    }
}

const deleteOnePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('posts').doc(id).delete()
        res.send('Post deleted successfully');
    } catch (err) {
        res.status(400).send('Delete failed')
    }
}

module.exports = {
    addBlog,
    getAllPosts,
    updateOnePost,
    deleteOnePost
}