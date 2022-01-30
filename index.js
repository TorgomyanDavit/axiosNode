
import express from "express"
import session from "express-session"
import passport from "passport"
import path from "path"
import fs from "fs"
import bcrypt from "bcrypt"
import passportLocal from "passport-local"



const app = express()

app.use(express.static("public"))
app.use(session({
    secret:process.env.SECRET,
    // cookie:{maxAge:6000},
    saveUninitialized:false,
    resave:false
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res) => {
    // res.redirect("main.html")
    res.sendFile(path.resolve("public/main.html"))
})




// Sorting Request 

app.post("/postRequest",(req,res) => {
    const request = req.body
    console.log(request)
    res.send({...request,responsServer:"isTrue"})
})

app.get("/getRequest",(req,res) => {
    res.send({getRequest:"isTrue",name:"tuyna"})
})

app.get("/getRequestbyGivenId/:id",(req,res) => {
    const request = req.params
    let ID = request.id
    res.send({getRequestbyId:"isTrue",name:"tuyna",ID})
})

app.put("/PutRequestbyGivenId/:id",(req,res) => {
    const ID = req.params.id
    console.log(req.body)
    let obj = {
        Id:1,
        name:"valod"
    }
    if(obj.Id === +ID) {
        res.send({putRequestbyId:"isTrue",name:"tuyna",ID})
    } else {
        res.send({putRequestbyId:"isTrue",name:"id IS not true",ID})
    }
})

app.delete("/deleteRequest/:id",(req,res) => {
    const paramsId = req.params.id
    console.log(paramsId)
    let obj = [
        {id:1,name:"valod"},
        {id:2,name:"vardan"}
    ]
    let all = obj.filter((val) => val.id !== +paramsId)
    res.send({...all,delete:"true"})
})

app.get("/queryRequest",(req,res) => {
    let query = [
        {name:"armen"},
        {username:"sharyan"}
    ]
    let newData = query.find((val) => val.name === req.query.name)
    res.send({newData,queryRequest:"true"})
})











app.listen(process.env.SERVER)