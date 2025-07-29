import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import ConnectDB from './db/db.config.js'

dotenv.config({
    path:"./.env"
})

const app=express()
ConnectDB()
app.use(cors(
    {
        origin:['http://localhost:5173']
    }
))


app.use(express.json())
app.use(express.urlencoded({extended:true}))



//import routes
import postRoute from'./routes/post.route.js'

//set routes
app.use('/api/v1',postRoute)




app.listen(3000,()=>{
    console.log("server is listening");
    
})