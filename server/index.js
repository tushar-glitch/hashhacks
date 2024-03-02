const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const notificationRouter = require("./routes/notificationRoutes");
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.get('/', (req, res) => {
    res.send("Hello World!!")
})
app.listen(port)