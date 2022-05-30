import express from "express"
import cors from "cors"
import mongoose from "mongoose"
// import jsonwebtoken from "jsonwebtoken";
import "./src/db/conn.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    
});

const User = new mongoose.model("User", userSchema);

const Job_Schema = new mongoose.Schema({
    title: String,
    description: String,
    lastdate: Date,
    location:String,
    job_type:String,
    money_range:String,

});

const Job_user = new mongoose.model("career", Job_Schema);

const apply_Schema = new mongoose.Schema({
    fullname: String,
    email: String,
    resume:String,
    message:String

});

const apply_user = new mongoose.model("apply_details", apply_Schema);

// Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {

            // const token = jwt.sign(
            //     {
            //         name: user.name,
            //         email: user.email,
            //     },
            //     'secret123'
            // )


            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                email,
                password
            })

            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})

// apply

app.post("/career", (req, res) => {
   
    const user = new Job_user({
        title: req.body.title,
        description: req.body.description,
        lastdate: req.body.lastdate,

    })


    user.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "Successfully posted job" })
        }
    })
    // }
    // })

})
//
app.post("/apply",(req,res)=>{
    try {
        const user = new apply_user({
            fullname:req.body.fullname,
            email:req.body.email,
            message:req.body.message,
            resume:req.body.resume
        })
      
        user.save(err => {
            if (err) {
                res.send(err)
            } else {
                res.send({ message: "Successfully applied" })
            }
        })
    } catch (error) {
        res.send(error.message)
    }
})
//  update jobs function for admin
app.patch("/career_update", async (req, res) => {
    try {

        const title = req.body.title;
        const update = await Job_user.findOneAndUpdate({ title }, req.body, { new: true });
        if (update) {
            res.send({ message: "updated successfully" });
        }
        else {
            res.send({ message: "updated unsuccessfull" });
        }
    } catch (error) {
        console.log(error.message);

    }
})

//  delete jobs function for admin
app.post("/career_delete", async (req, res) => {
    try {

        const title = req.body.title;

        const delete_user = await Job_user.findOneAndDelete({ title });


        if (delete_user) {
            res.send({ message: "deleted successfully" });
        }
        else {
            res.send({ message: "deleted unsuccessfull" });
        }
    } catch (error) {
        console.log(error.message);

    }
})

app.get("/admin/load", async (req, res) => {
    try {

        const load_data = await Job_user.find();
        if(load_data){
            res.json({
                status:201,
                data:load_data
              })
          
        }
        else{
            res.send({message:"no data loading...."})
        }
        


    } catch (error) {

    }
})





// const createToken = async() =>{

//     const token = await jwt.sign({_id:"625021bb225c4232d039be0e"}, "mynameiskomalkanaujiyaitengineer");
//     console.log(token);
// }



// createToken();
app.listen(9002, () => {
    console.log("BE started at port 9002")
})