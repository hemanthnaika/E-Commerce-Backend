import  express  from "express";
import dotenv from 'dotenv'
dotenv.config()

const app =express()
const port=process.env.PORT || 3000
console.log(process.env.DB_URL)

app.listen(port,(req,res)=>{
  console.log(`Server listening at PORT ${port}`)
})