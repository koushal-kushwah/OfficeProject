const express = require("express")
const dotenv = require("dotenv")
const authRouter = require("./routers/AuthRouter")


dotenv.config();
const server = express("")
server.use(express.json())

server.get("/",(req,res)=>{
    res.json("Server is running.....")
})

server.use("/auth",authRouter)

server.listen(process.env.PORT,()=>{
    console.log("http://localhost:"+process.env.PORT)
})