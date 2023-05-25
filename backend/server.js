import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import noteRoute from './routes/noteRoute.js'

const app = express()
const PORT = process.env.PORT || 6500

// path      http:localhost:8000/
app.get('/', (req, res) => {
    console.log(process.env)
    res.json({message: "Hello Home"})
})

app.use('/api/note', noteRoute)

app.listen(PORT, () => {
  console.log(`server listening on port - ${PORT}`);
});