import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import jsonwebtoken from "jsonwebtoken";


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

// Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){


            const token = jwt.sign(

{
            name: user.name,
            email: user.email,
},
            )

            if(password === user.password ) {
                res.send({message: "Login Successfull", user: token})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })

            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 





// const createToken = async() =>{

//     const token = await jwt.sign({_id:"625021bb225c4232d039be0e"}, "mynameiskomalkanaujiyaitengineer");
//     console.log(token);
// }


createToken();
app.listen(9002,() => {
    console.log("BE started at port 9002")
})