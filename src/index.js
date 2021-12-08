
import  express  from "express";
import dotenv from 'dotenv'
import connectDB from "./services/mongodb/connectDB";
dotenv.config()
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import categoryRoutes from './routes/categoryRoutes'

const app =express()
const port=process.env.PORT || 3000
connectDB()

app.use(cors())
app.use(express.json())
// !Route to handle auth requests
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/category", categoryRoutes)

app.listen(port,(req,res)=>{
  console.log(`Server listening at PORT ${port}`)
})