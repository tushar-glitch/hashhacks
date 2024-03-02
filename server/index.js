const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const userRouter = require("./routes/userRoutes");
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://tushar-glitch:${process.env.MONGO_PASS}@cluster0.fjkozqb.mongodb.net/?retryWrites=true&w=majority`)
const db = mongoose.connection;
db.on('open', () => {
    console.log('DB connected successfully');
})
app.use("/api/user", userRouter);
app.get('/', (req, res) => {
    res.send("Hello World!!")
})
app.listen(port)