import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import googlerouter from "./routes/google.route.js";
import userRouter from "./routes/user.routes.js";
import profileRouter from "./routes/profile.routes.js"

const app= express();

app.use(cors({
    origin:'http://localhost:8081',
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/v1",googlerouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/profile",profileRouter);

export {app};
