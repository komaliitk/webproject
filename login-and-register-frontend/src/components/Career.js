import React, { useState } from "react"

import axios from "axios"
import { useHistory } from "react-router-dom"

const Career = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        title: "",
        description:"",
        lastdate:"",
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const career_sub = () => {
        const { title,description,lastdate} = user
        if( title && description && lastdate){
            axios.post("http://localhost:9002/career", user)
            .then( res => {
                alert(res.data.message)
                history.push("/")
            })
        } else {
            alert("invlid input")
        }
        
    }
   

    return (
        <div className="app_name">
        <div className="register">
            {console.log("User", user)}
            <h1>Career</h1>
            <input type="text" name="title" value={user.title} placeholder="Your title" onChange={ handleChange }></input>
            <input type="text" name="description" value={user.description} placeholder="Your description" onChange={ handleChange }></input>
           <input type="date" name="lastdate"  value={user.lastdate} placeholder="lastdate" onChange={handleChange}></input>
            <div className="button" onClick={career_sub} >Career Post</div>
           
        </div>
        </div>
    )
}

export default Career


