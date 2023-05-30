import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import noteRoute from './routes/noteRoute.js'
import connectDB from "./config/db.js";
// import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 6500

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(cors());

// path      http:localhost:8000/
app.get('/', (req, res) => {
    // console.log(process.env)
    res.json({message: "Hello Home"})
})

app.use('/api/note', noteRoute)

app.listen(PORT, () => {
  console.log(`server listening on port - ${PORT}`);
});