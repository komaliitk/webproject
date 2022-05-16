


import React from 'react'
import about from '../../assets/img/home-img/about-img.jpg';

import contact from '../../assets/img/home-img/contact-img.jpg';
import iitk from '../../assets/img/iitk.jpg';
import nttdata from '../../assets/img/nttdata.png';
import we from '../../assets/img/we-hub.jpg';
import TSIC from '../../assets/img/TSIC.jpg';
import start from '../../assets/img/start-up.jpg';
import amtz from '../../assets/img/amtz.jpg';


// import logo from '../logo.svg';
import '../../assets/style.css';
import Nav from './pages_components/Nav'

import gears from "../../assets/img/home-img/gears.jpg";
import services from "../../assets/img/home-img/services.jpg";
import innovations from "../../assets/img/home-img/innovations.jpg";
import edu from "../../assets/img/home-img/edu.jpg";


import Iframe from 'react-iframe'



import "../../assets/css/home.css";
import Footer from './pages_components/Footer';

export default function Home() {
  return (
    <>
      <Nav />


      <div class="first-container" style={{ backgroundImage: `url(${gears})` }}>
        <div class="over-div">
          <h1>The value of Designocare Solutions</h1>
          <br />
          <br />
          <p>Let's succeed together</p>
        </div>
      </div>

      <div class="about-container">
        <img src={about} alt="About us" />
       
        <div class="about-item" >
          <h1>About Us</h1>
          <p>We believe inventive product design and development is all about people. Those with ideas, those with the
            expertise, and
            most importantly, people whose lives are enhanced by innovative products.</p>
          <p>As a professional design and prototyping consultancy, our mission is to be the ideal partner on your product
            development
            journey. Our minds are open to each and every product idea, whether it’s the evolution of an existing
            product,
            or the
            development of a totally revolutionary concept. And thanks to more than 15 years’ successful experience, we
            couldn’t be
            better placed to make your idea tangible and commercial. In short: a finished product, ready and right for
            both
            the
            marketplace and your customers.</p>
          <p>At Designocare, we bridge the gap between design concept and design delivery. Our teams work collaboratively
            to
            build
            exceptional products that delight aesthetically and succeed commercially. We know how important it is to get
            your
            product developed and market-ready ahead of the competition. We develop products quite fast, cost-effective
            and
            sprinkled with Designocare amazingness.</p>
        </div>
      </div>

      <div class="team-container" id="team">
        <h1>Founders</h1>
        <hr />
        <div class="team-items">
          <div class="team-item">
            <img src={require('../../assets/img/team-img/DK.jpeg').default} alt="Dinesh Kandukuri" />
           
            <h5>Dinesh Kandukuri</h5>
            <h6>Director & CEO</h6>
            <p>Dinesh completed his Masters in
              Electrical and Electronics Engineering from University of South Alabama, USA. </p>
            <p> He has 12
              years of Project/Program Management Experience in health care, banking and forex domains
              across USA, UK and India, While in the USA, he worked on several implementations for United
              Healthcare, Blue Cross Blue Shield California. In the UK, he worked at Royal Bank of
              Scotland and also has 3 years of experience handling and working in Makerslab, Edinburgh,
              Scotland. Dinesh is a PRINCE2 Certified Project Manager.</p>
          </div>

          <div class="partition"></div>
          <div class="team-item">
            <img src={require('../../assets/img/team-img/KB.jpeg').default}  alt="Kanika Bansal" />
            <h5>Kanika Bansal</h5>
            <h6>Director</h6>
            <p>Kanika obtained Gold Medal for her Masters
              in Biomechanical Engineering from the University of Edinburgh, UK. Kanika has over 8 years
              of designing experience in UK, participated in Stanford India Biodesign program, worked as
              volunteer and designed patient transfer system, which was later adopted by Government of
              India for rural areas. UK patents were granted for her innovative Medical Product Designs
              and been assigned many awards in UK on the same.
            </p>
            <p> She is also a Recipient of STEM Women Entrepreneur awards in UK, given by Her Royal
              Majesty.</p>
          </div>
        </div>
      </div>


      <div class="link-container">
        <h1>What We Can Do</h1>
        <div class="link-items">
          <div class="link-item"
            style={{ backgroundImage: `url(${services})` }}>
            <div class="link-blank"></div>
            <div class="link-desc">
              <h2>Services</h2>
              <a href="/services">
                <button type="button" class="btn btn-outline-light">Read more</button>
              </a>
            </div>
          </div>


          <div class="link-item"
            style={{ backgroundImage: `url(${innovations})` }}>
            <div class="link-blank"></div>
            <div class="link-desc">
              <h2>Our Innovations</h2>
              <a href="/innovations">
                <button type="button" class="btn btn-outline-light">Read more</button>
              </a>
            </div>
          </div>

          <div class="link-item" style={{ backgroundImage: `url(${edu})` }}>
            <div class="link-blank"></div>
            <div class="link-desc">
              <h2>Education</h2>
              <a href="/education">
                <button type="button" class="btn btn-outline-light">Read more</button>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div class="contact-container" id="contact" >
        <div class="contact-part" id="contact-part-1" >
          <div class="contact-item" id="contact-item-1" >
            <h2>Contact Us</h2>
            <p># A 102, Sai Rasik Residency </p>
            <p>Image Hospital Lane , Madhapur </p>
            <p>Hyderabad – 500081</p>
            <br />
            <p>Civil Lines, New Delhi</p>
            <p>New Delhi – 110054</p>
            <br />
            <a href="mailto:info.designocare@gmail.com">info.designocare@gmail.com</a>
            <br />
            <p>040-35855589 (Landline) </p>
            <p>+91-7993648675 (Mobile)</p>
          </div>
          <div class="contact-item" id="contact-item-2">
            <img src={contact} alt="Contact Us" />
          </div>

        </div>


        <div class="contact-part" id="contact-part-2">
		
	<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121795.02129903522!2d78.3898836239639!3d17.455194549773825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93887542781b%3A0xe113e2b466e94f29!2sDESIGNOCARE%20SOLUTIONS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1611906716259!5m2!1sen!2sin"
 width="100%"
 height="100%"
 display="initial"
 position="relative"/>
 
 
 </div>
</div>


        <div class="logo-container">

          <div class="logo-item">
            <a href="http://www.siicincubator.com">
              <img src={iitk} alt="IIT-Kanpur" />
              <div class="para">
                Incubated at IIT, Kanpur
              </div>
            </a>

          </div>


          <div class="logo-item">

            <img src={nttdata} alt="We-Hub" />
            <div class="para">

              Sponsored <br />
              by

            </div>

          </div>


          <div class="logo-item">

            <img src={we} alt="We-Hub" />
            <div class="para">
              Supported by WEHUB, An initiative of Government of
              Telangana
            </div>

          </div>

          <div class="logo-item">
            <img src={TSIC} alt="We-Hub" />
            <div class="para">
              Supported by Telangana State Innovation Cell
            </div>
          </div>

          <div class="logo-item">
            <img src={start} alt="Start-up India" />
            <div class="para">
              Recognised by Start-up India
            </div>
          </div>

          <div class="logo-item">
            <img src={amtz} alt="IIT-Kanpur" />
            <div class="para">
              Manufacturing Support by Andhra Pradesh Medtech Zone
            </div>
          </div>

        </div>


        <footer>
          <p>Designocare bridges the gap between design concept and design
            delivery</p>
        </footer>
<Footer />

      {/* </div> */}


    </>
  )
}

