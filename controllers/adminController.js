const firebase = require('firebase')
const { firebaseConfig } = require('../config')
const db = require('../db')
const firestore = firebase.firestore()


const addBlog = async (req, res, next) => {
    try {
        const data = req.body
        await firestore.collection('posts').doc().set(data)
        res.send('Record added successfully')
    } catch (err) {
        res.status(400).send(err.message)
    }
}


module.exports = {
    addBlog,
}