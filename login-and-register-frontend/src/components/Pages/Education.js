import React from 'react'
import Nav from './pages_components/Nav'
// import './assets/style.css';
import '../../assets/css/education.css';
// import {Helmet} from "react-helmet";
import "../../assets/js/self.js";
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import Footer from './pages_components/Footer';


export default function Education() {
  return (
    <>
         <Nav />
    
         <header class="bg-primary text-center py-5 mb-3">
        <div class="container">
          <h2 class="font-weight-light text-white">85% of jobs that will exist in 2030 haven’t been invented yet, today’s
            student need
            to adapt and innovate to solve new problems</h2>
        </div>
      </header>
      <div class="main-container">
        <div class="edu-item" id="edu-item-0">
          <img src={require("../../assets/img/education-img/drone-train.jpg").default}
            alt="Industrial Training and placement" />
          <div class="img-desc">
            <h2>Drone Training</h2>
            <p>We train to fly UAVs safely via short courses for which you get pilot license approved by DGCA authorised
              FTO: TSAA and
              is valid for 5 years.</p>
			  <button id="know-btn-1" type="button" class="btn btn-light" onclick="toggle(this)">Know More..</button>
  
          </div>
        </div>
        
      </div>
      <div class="edu-item" id="edu-item-1">
		<img src={require("../../assets/img/education-img/training.jpg").default}
			alt="Industrial Training and Placement" />
		<div class="img-desc">
			<h2>Industrial Training and Placement</h2>
			<p>With Designocare, students learn how to use Project-Based Learning and Design Thinking to identify
				real-world needs,
				problems and opportunities.</p>
			
				<button id="know-btn-1" type="button" class="btn btn-light" onclick="toggle(this)">Know More..</button>
		</div>
	</div>
    <div class="edu-item" id="edu-item-2">
		<img src={require("../../assets/img/education-img/college-project.jpg").default} alt="Academic Projects" />
		<div class="img-desc">
			<h2>Academic Projects</h2>
			<p>What is a common thing about Google Search, Yahoo ! and Facebook? Besides the fact that they all have
				revolutionized the
				internet, all of them were college projects of their creators.</p>
			
				<button id="know-btn-1" type="button" class="btn btn-light" onclick="toggle(this)">Know More..</button>
		</div>
	</div>
	<div class="edu-item" id="edu-item-3">
		<img src={require("../../assets/img/education-img/workshop-printing.jpg").default} alt="3D Printing" />
		<div class="img-desc">
			<h2>3D Printing</h2>
			<h2>Workshops/Courses</h2>
			<p>This course will arm you with everything you need to start 3D printing. One of the most useful,
				interesting, and popular
				pastimes of the 21st century, 3D printing enables you to produce a wide variety of objects.</p>
		
				<button id="know-btn-1" type="button" class="btn btn-light" onclick="toggle(this)">Know More..</button>
		</div>
	</div>
	<div class="edu-item" id="edu-item-4">
		<img src={require("../../assets/img/education-img/workshop-thinking.jpg").default} alt="Design Thinking" />
		<div class="img-desc">
			<h2>Design Thinking</h2>
			<h2>Workshops/Courses</h2>
			<p>Design Thinking is both an ideology and a process used to solve highly complex problems in a user-centric
				way.</p>
				
				<button id="know-btn-1" type="button" class="btn btn-light" onclick="toggle(this)">Know More..</button>
		</div>
	</div>
	<div class="edu-item" id="edu-item-5">
		<img src={require("../../assets/img/education-img/workshop-softwares.jpg").default} alt="Design Software"/>
		<div class="img-desc">
			<h2>Design Firmware/Software</h2>
			<h2>Workshops/Courses</h2>
			<p>Through this course, you will learn a pragmatic approach that is both a system for inducing creativity
				and innovation
				and a framework for solving complex business problems.</p>
			
				<button id="know-btn-1" type="button" class="btn btn-light" onclick="toggle(this)">Know More..</button>
		</div>
	</div>
	<div class="edu-item" id="edu-item-6">
		<img src={require("../../assets/img/education-img/internships.jpg").default} alt="Internships" />
		<div class="img-desc">
			<h2>Internships</h2>
			<p>There are many benefits to an internship with us – above all, for you. We invest in your education and
				keep an eye on
				your future. Many of our interns go on to successfully join big MNC’s and MSME’s.</p>
		
				<button id="know-btn-1" type="button" class="btn btn-light" onclick="toggle(this)">Know More..</button>
		</div>
	</div>


    <footer>
	<p>There's no learning without trying lots of ideas and failing lots of times</p>
	<p id="end"> -Jony Ive</p>
</footer>

<Footer />

    </>
  )
}
