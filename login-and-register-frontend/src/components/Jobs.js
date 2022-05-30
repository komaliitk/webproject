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

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    message: "",
    resume: "",

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
    if (fullname && email && resume && message) {
      axios.post("http://localhost:9002/apply", user)
        .then(res => {
          alert(res.data.message)
          // history.push("/login")
          setUser({
            fullname: "",
            email: "",
            resume: "",
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

            {
              data.map((item, key) => {
                return (
                  <>
                    <div class="job-item p-4 mb-4" key={key}>

                      <div class="row g-4">
                        <div class="col-sm-12 col-md-8 d-flex align-items-center">
                          <img class="flex-shrink-0 img-fluid border rounded" src={require("../assets/img/jobicon.png").default} alt="" style={{ width: 80, height: 80 }} />
                          <div class="text-start ps-4">
                            <h5 style={{ textTransform: "capitalize" }} class="mb-3">{item.title}</h5>
                            <span class="text-truncate me-3 text-capitalize"><i class="fa fa-map-marker-alt text-primary me-2 " ></i>{item.location}</span>
                            <span class="text-truncate me-3 text-capitalize"><i class="far fa-clock text-primary me-2"></i>{item.job_type}</span>
                            <span class="text-truncate me-0 text-capitalize"><i class="far fa-money-bill-alt text-primary me-2"></i>Rs.{item.money_range}</span>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div class="d-flex mb-3">
                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                            <a class="btn btn-primary" href="">Apply Now</a>
                          </div>
                          <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: {item.lastdate}</small>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }


          </div>

        </div>


      </section>


      <Footer />
    </>
  )
}

export default Jobs
