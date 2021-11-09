const express = require('express')
const cors = require('cors')
const config = require('./config')
const adminRouters = require('./routes/adminRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/admin', adminRouters.routers)

app.listen(config.port, () => console.log("Server Started Running!"))