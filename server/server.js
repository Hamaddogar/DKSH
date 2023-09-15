// import userRouter from './Api/Router/userRouter.js';
// import loginRouter from './Api/Router/loginRouter.js';
// import forgetRouter from './Api/Router/forgetRouter.js';
// import resetRouter from './Api/Router/resetRouter.js';
// import allJobsRouter from './Api/Router/allJobsRouter.js';
// import allUsersRouter from './Api/Router/allUsersRouter.js';
// import settingUpdateRouter from './Api/Router/settingUpdateRouter.js';
// import countryGetter from './Api/Router/countryRoute.js';


import connectDB from './DB-Config/db.js';
import path from "path";
import express from 'express';
import cors from 'cors';
const app = express();
import bodyParser from 'body-parser';
import routers from './routerMapper.js';


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(express.static("./build"));

// useage

// ============Work Area================//
connectDB();
// app.use('/', userRouter);
// app.use('/', settingUpdateRouter);
// app.use('/', loginRouter);
// app.use('/', forgetRouter);
// app.use('/', resetRouter);
// app.use('/', allJobsRouter);
// app.use('/', allUsersRouter);
// app.use('/', countryGetter);

// Attach all routers to the app
routers.forEach((router) => {
    app.use('/', router);
});


// ===========Deploy Purposes===========//
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log('server is running'); })