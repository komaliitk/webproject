import React, { useState, useEffect } from 'react';
import "./jobs.css";
import Nav from './Pages/pages_components/Nav';
import Footer from './Pages/pages_components/Footer';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Jobs = () => {


  const [data, getData] = useState([]);
  const URL = 'http://localhost:9002/admin/load';

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = () => {
    fetch(URL)
        .then((res) =>
            res.json())

        .then((response) => {
            console.log(response.data);
            getData(response.data);
        })

}
// apply
const history = useHistory()

const [ user, setUser] = useState({
    fullname: "",
    email:"",
    message: "",
    resume:"",
    
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const apply = () => {
    const { fullname, email, resume, message } = user
    if( fullname && email && resume && message){
        axios.post("http://localhost:9002/apply", user)
        .then( res => {
            alert(res.data.message)
            // history.push("/login")
            setUser({
              fullname: "",
              email:"",
              resume:"",
              message: ""
          })
          
        })
    } else {
        alert("invalid input")
    }
    
}


  return (
    <>
      <Nav />

      <div class="header" >
        <div className="container">
          <div className='row'>
            <div className='col-12'>
              <h1>Career</h1>
            </div>
          </div>
        </div>


      </div>

      <br />

      <section className='page_content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='inner_left_box'>
              {data.map((item, i) => (
                    // <tr key={i}>
                    //   <td>{item._id}</td>
                    //     <td>{item.title}</td>
                    //     <td>{item.description}</td>
                    //     <td>{item.lastdate}</td>
                        
                    // </tr>
                 <>
                     <p key={i}>

                        <a class="btn btn-primary w-100" data-toggle="collapse" href={"#"+item.title.replace(/\s/g,"")}role="button" aria-expanded="false" aria-controls="collapseExample">
                    {item.title}

                  </a>
                    </p>
                    <div class="collapse" id={item.title.replace(/\s/g,"")}>
                  <div class="card card-body">
                    <h4>Job description</h4>
                    <p style={{letterSpacing:1}}>
                        {item.description}
                    </p>
                    <h4 className='title-head'>Come and Join Us</h4>
                    
                    <div className='form_apply'>
                    <form>
                   
                        <div class="form-group">
                          <label for="exampleInputEmail1">Full Name</label>
                          <input type="text" class="form-control" id="exampleInputEmail1" name='fullname' value={user.fullname} onChange={ handleChange } aria-describedby="emailHelp" placeholder="Full Name " />

                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email</label>
                          <input type="text" class="form-control" id="exampleInputEmail1" name='email' value={user.email}onChange={ handleChange }  aria-describedby="emailHelp" placeholder="Enter email" />

                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail1">Upload Your Resume</label>
                          <input type="file" class="form-control-file" value={user.resume} name="resume" onChange={ handleChange } id="exampleFormControlFile1" />
                        </div>


                        <div class="form-group">
                          <label for="exampleFormControlTextarea1"></label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={user.message}onChange={ handleChange }  placeholder='Give us more details..'></textarea>
                        </div>

                        
                        <div className="btn btn-primary" type="submit"  onClick={apply} >Apply</div>

                        </form>   


                    </div>

                  </div>
                </div>
                 </>
                    
                    
                ))}
               
            

                
               
               
              </div>

            </div>
            <div className='col-md-3'>


            </div>


          </div>

        </div>
      </section>


      <Footer />
    </>
  )
}

export default Jobs
