const express = require("express")
const authRouter = require("./routers/AuthRouter")

const server = express("")
server.use(express.json())

server.get("/",(req,res)=>{

})

server.use("/auth",authRouter)

server.listen(8080,()=>{
    console.log("http://localhost:8080")
})