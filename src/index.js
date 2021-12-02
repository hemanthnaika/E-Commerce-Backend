import  express  from "express";
import dotenv from 'dotenv'
dotenv.config()

const app =express()
console.log(process.env.DB_URL)

app.listen(3000,(req,res)=>{
  console.log('Server listening at PORT 3000')
})