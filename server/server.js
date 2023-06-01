// require('dotenv').config()
const userRouter = require('./routes/user');
const connectDB = require('./DataBase/db');
const express = require('express');
const path = require("path");
const cors = require('cors');
const app = express();

// useage
app.use(cors());
app.use(express.static("./build"));
app.use(express.static("./uploads"));
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));

// ============Work Area================//
connectDB();
app.use('/', userRouter);

// ===========Deploy Purposes===========//
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log('server is running'); })
