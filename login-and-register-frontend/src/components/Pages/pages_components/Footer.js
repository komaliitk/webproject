
import React from 'react'
import "../../../assets/vendor/bootstrap/css/bootstrap.min.css";
// import  "../assets/css/foot.css";
import '../../../assets/css/foot.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";




export default function Footer() {
  return (
    
   <>
   
   <div class="foot-container">
	<div class="foot-desc">
		<p>See some of our amazing work, follow us:</p>
		{/* <a href="https://www.facebook.com/designocare" role="link" aria-pressed="true" target="_blank"><i
				class="fab fa-facebook fa-2x" style="margin: 0px 5px 12px 5px;"></i></a>
		<a href="https://twitter.com/DesignocareT" role="link" aria-pressed="true" target="_blank"><i
				class="fab fa-twitter fa-2x" style="margin: 0px 5px 12px 5px;"></i></a>
		<a href="https://www.linkedin.com/company/designocare-solutions-pvt-ltd/" role="link" aria-pressed="true"
			target="_blank"><i class="fab fa-linkedin fa-2x" style="margin: 0px 5px 12px 5px;"></i></a>
		<a href="https://www.instagram.com/designocares/" role="link" aria-pressed="true" target="_blank"><i
				class="fab fa-instagram fa-2x" style="margin: 0px 5px 12px 5px;"></i></a> */}
        
		<a href="https://www.facebook.com/designocare">
		    <FaFacebook size='30px' color='#007bff' style={{margin:10}}/>
			
			 </a> 
		
			 <a href="https://twitter.com/DesignocareT" >
		     <FaTwitter size='30px' color='#007bff' style={{margin:10}} />
			 </a>

			 <a href="https://www.linkedin.com/company/designocare-solutions-pvt-ltd/">
		     <FaLinkedin size='30px' color='#007bff' style={{margin:10}} />
			 </a>

			
			 <a href="https://www.instagram.com/designocares/">
		     <FaInstagram size='30px' color='#007bff' style={{margin:10}} />
			 </a>

			
       

		<div class="links">
	
				<a href="/">Home</a>
			<a href="/#team">Team</a>
			<a href="/#contact">Contact Us</a>
		</div>
		<p>Copyright &copy; Designocare 2020</p>
	</div>
</div>
</>

  )
}