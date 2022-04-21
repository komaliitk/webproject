import React from 'react'
import Nav from './pages_components/Nav';
import '../../assets/css/innovations.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import Footer from './pages_components/Footer';

export default function Innovations() {
  return (
    <>
    <Nav />
    
    <header class="bg-primary text-center py-5 mb-4">
    <div class="container">
        <h1 class="font-weight-light text-white">Innovation Areas</h1>
    </div>
   </header>


<div class="main-container">
    <div class="innovation-container" id='innovation-container-1'>
        <div class="innovation-items" id="innovation-item-1">
            <img src={require("../../assets/img/innovations-img/medi-prod.jpg").default} alt="Medical products" />
            <div class="overlapping-div">
                <h1>Medical Devices</h1>
                <div class="underline"></div>
            </div>
        </div>

        
            {/* <div class="innovation-container" id='innovation-container-2'> */}

        <div class="innovation-items" id="innovation-item-2">
            <img src={require("../../assets/img/innovations-img/bio-prod.jpg").default} alt="Biomaterials"/>
            <div class="overlapping-div">
                <h1>Biomaterials</h1>
                <div class="underline"></div>
            </div>
        </div>
    
    </div>
        <div class="innovation-container" id='innovation-container-2'>




        <div class="innovation-items" id="innovation-item-3">
            <img src={require("../../assets/img/innovations-img/home-auto.jpg").default} alt="Home automation system" />
            <div class="overlapping-div">
                <h1>Smart Devices</h1>
                <div class="underline"></div>
            </div>
        </div>
        <div class="innovation-items" id="innovation-item-6">
            <img src={require("../../assets/img/innovations-img/baby-prod.jpg").default} alt="Baby care" />
            <div class="overlapping-div">
                <h1>Baby Care</h1>
                <div class="underline"></div>
            </div>
        </div>
        
    </div>



</div>

    

<footer>
    <p>Successful products have some common attributes ... Simple design,
        Great functionality, affordable and are timed right</p>
</footer>


<Footer />    
  </>
  )
}
