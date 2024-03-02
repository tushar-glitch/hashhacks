const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())


app.use("/api/user", userRouter);
app.get('/', (req, res) => {
    res.send("Hello World!!")
})
app.listen(port)