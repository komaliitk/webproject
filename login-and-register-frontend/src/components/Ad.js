
import React, { useState, useEffect } from 'react';

import Nav from "./Pages/pages_components/Nav"
import Footer from './Pages/pages_components/Footer'
import "./Ad.css";
import axios from "axios"
import { useHistory } from "react-router-dom"


const Ad = () => {

  const history = useHistory()
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
  const [user, setUser] = useState({
    title: "",
    description: "",
    lastdate: "",

  })
  
  const [user_update, setUpdate] = useState({
    title: "",
    description: "",
    lastdate: "",

  })
  
  const [user_delete, setDelete] = useState({
    title: "",
    description: "",
    lastdate: "",

  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  
  const handleChanger = e => {
    const { name, value } = e.target
    setUpdate({
      ...user_update,
      [name]: value
    })
  }
  
  const handleChanger_delete = e => {
    const { name, value } = e.target
    setDelete({
      ...user_delete,
      [name]: value
    })
  }

  const career_sub = () => {
    const { title, description, lastdate } = user
    // alert(user.lastdate);
    if (title && description && lastdate) {
      axios.post("http://localhost:9002/career", user)
        .then(res => {
          alert(res.data.message)
          history.push("/admin")
           setUser({
            title: "",
            description: "",
            lastdate: "",
        
          });
          
        })
    } else {
      alert("invlid input")
    }

  }

  const update_sub = () => {
    const { title, description, lastdate } = user_update
    
    if (title && description && lastdate) {
      axios.patch("http://localhost:9002/career_update", user_update)
        .then(res => {
          alert(res.data.message)
          history.push("/admin")
          setUpdate({
            title: "",
            description: "",
            lastdate: "",
        
          });
        })
    } else {
      alert("invlid input")
    }

  }

  const delete_sub = () => {
    const { title} = user_delete;
    
    if (title ) {
     
      axios.post("http://localhost:9002/career_delete", user)
        .then(res => {
          alert(res.data.message)
          history.push("/admin")
          setDelete({
            title: "",
            description: "",
            lastdate: "",
        
          });
        })
    } else {
      alert("invlid input")
    }

  }

  // const loading = ()=>{
  //   axios.get('http://localhost:9002/admin/load')
  // .then(function (response) {
  //   // handle success
  //   // getData(response.data);
    
  //   alert(response.data);
    
  //   console.log(response.data);
    
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   alert("not working");
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });
  // }
  
  // data
  



  return (
    <>
      <Nav />
      <section class="header">
        <h1>Admin Page</h1>
        {/* <a class="btn-bgstroke">Call To Action</a> */}
      </section>
      <br />
      <div className='container'>

        <div class="row">
          <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Post</a>



              <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Update</a>
              <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Delete</a>
              <a class="nav-link" id="v-pills-messages-tab1" data-toggle="pill" href="#v-pills-messages1" role="tab" aria-controls="v-pills-messages" aria-selected="false">Load</a>
            </div>
          </div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                <div class="form-group">
                  <input type="text" class="form-control mb-3" name="title" value={user.title} placeholder="Your title" onChange={handleChange}></input>
                  <textarea type="text"  rows="5" class="form-control mb-3" name="description" value={user.description} placeholder="Your description" onChange={handleChange}/>
                  <input type="date" class="form-control mb-3" name="lastdate" value={user.lastdate} placeholder="lastdate" onChange={handleChange}></input>
                  <div class="btn btn-primary" onClick={career_sub} > Post</div>


                </div>

              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div class="form-group">
                  <input type="text" class="form-control mb-3" name="title" value={user_update.title} placeholder="Your title" onChange={handleChanger}></input>
                  <textarea type="text" rows="5" class="form-control mb-3" name="description" value={user_update.description} placeholder="Your description" onChange={handleChanger}/>
                  <input type="date" class="form-control mb-3" name="lastdate" value={user_update.lastdate} placeholder="lastdate" onChange={handleChanger}></input>
                  <div class="btn btn-primary" onClick={update_sub} > Update button</div>


                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div class="form-group">
                  <input type="text" class="form-control mb-3" name="title" value={user_delete.title} placeholder="Your title" onChange={handleChanger_delete}></input>
               
                  <div class="btn btn-primary" onClick={delete_sub} > Delete button</div>


                </div>                
                </div>
                <div class="tab-pane fade" id="v-pills-messages1" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div class="form-group">
                
                  <button className="btn btn-primary text-left" onClick={fetchData}>Load Data</button>
               
                  
                 
            <tbody className="w-100">
                <tr>
                   
                    
                    <th>Title</th>
                    <th>Description</th>
                    <th>Lastdate</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                     
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.lastdate}</td>
                        
                    </tr>
                ))}
            </tbody>


                </div>                
                </div>
            </div>
          </div>
        </div>

      </div>



      <Footer />
    </>
  )
}

export default Ad
