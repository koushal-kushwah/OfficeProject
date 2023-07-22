const express = require("express")
const jwtManager = require("../config/JwtManager")
const {User} =require("../models/index")
const ApiResponse = require("./ApiResponse")
const WebRouter = require("./WebRouter")

const router = express.Router()


router.post("/login", async(req,res)=>
{
    const {email,password} = req.body;
    const user = await User.findOne({
        where : {email,password},
        include : "employee",
        attributes:{
        exclude : ["emp_id","createdAt","updatedAt"]
        }
    });
    if(user==null){
        res.json(new ApiResponse(false,null,"Invalid User !",
        null))
    }
    else{
        var userid = user.id;
        var empid = user.employee.id;
        var type = user.employee.type;
        var name = user.employee.type;

        const token = jwtManager.generateAccessToken(userid,
            empid,type);

        res.json(new ApiResponse(true,{name,token},"Welcome User !",
        null))
    }
})

router.use("*",(req,res,next)=>{
    jwtManager.authenticateToken(req,result=>{
        if(result.status)
            next()
        else
            res.json(new ApiResponse(result.status,null,result.msg,null))
    })
})

router.use("/web",WebRouter)

module.exports =router;