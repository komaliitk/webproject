import React from 'react';
// import logo2 from '../assets/img/logo2.png';
import logo3 from "../../../assets/img/logo2.png";
// import "../assets/scss/_navbar.scss";
import "../../../assets/vendor/bootstrap/css/bootstrap.min.css"

import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed top py-3" id="mainNav">
		<div className="container">
			<a className="navbar-brand" href="/">
				<img src={logo3} />
			</a>
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
				data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto my-2 my-lg-0">
					<li className="<%= pageTitle==='home' ? 'nav-item mx-1 active' : 'nav-item mx-1' %>">
						{/* <a className="nav-link js-scroll-trigger " href="/">Home</a> */}
						<Link to='/' className="nav-link js-scroll-trigger ">Home</Link>
					</li>
					<li className="<%= pageTitle==='services' ? 'nav-item mx-1 active' : 'nav-item mx-1' %>">
					
					</li>
					<li className="<%= pageTitle==='innovations' ? 'nav-item mx-1 active' : 'nav-item mx-1' %>">
						{/* <a className="nav-link js-scroll-trigger" href="/innovations">Innovations</a> */}
						<Link to='/Innovations' className="nav-link js-scroll-trigger ">Innovations</Link>
					</li>
					<li className="<%= pageTitle==='login' ? 'nav-item mx-1 active' : 'nav-item mx-1' %>">
					
					<Link to='/jobs' className="nav-link js-scroll-trigger ">Careers</Link>
					</li>
					<li className="<%= pageTitle==='login' ? 'nav-item mx-1 active' : 'nav-item mx-1' %>">
					{/* <a className="nav-link js-scroll-trigger" href="/login">Login</a> */}
					<Link to='/Login' className="nav-link js-scroll-trigger ">Login</Link>
					</li>
					
				</ul>

			</div>
		</div>
	</nav>
  )
}
