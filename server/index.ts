import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import morgan from "morgan";



// middleware
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());




// Routes

app.get('/', (req, res) => {
    res.send({ msg: "Hello Ts Database" });
})




// database 
import './config/database'



// server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running from ", PORT);
})