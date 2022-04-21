import React from 'react'
import Nav from './pages_components/Nav';
import '../../assets/css/services.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';


import '../../assets/style.css';

import Footer from './pages_components/Footer';
// import './assets/vendor/bootstrap/js/bootstrap.bundle.js';
export default function Services() {
  return (
	  <>
		<Nav/>
<header class="bg-primary text-center py-5 mb-4">
	<div class="container">
		<h2 class="font-weight-light text-white">Our mission is to be the ideal partner on your product development
			journey</h2>
	</div>
</header>
{/* <h5>hwllo </h5> */}



<div class="main-container">
	<div class="service-container" id='service-container-1'>
		<div class="service-items" id="service-item-1">
			<img src={require('../../assets/img/services-img/drone.jpg').default} alt="service-img" />
			<div class="overlapping-div">
				<h1>Drones</h1>
				<p>We provide your business with the important data it needs to optimise operations, take less risk and
					do smart productive
					work.
				</p>
				{/* <div class='exp' id="exp-1" style='display: none;'>
					<p> Also taking you leaps ahead in getting critical information required to make smarter business
						decisions.
					</p>
				</div> */}

				<button id="know-btn-1" onclick="toggle(this)" type="button" class="btn btn-light">Know more..</button>
			</div>
		</div>

		<div class="service-items" id="service-item-2">
			<img src={require('../../assets/img/services-img/autocad.jpg').default} alt="service-img"/>
				{/* // style="border: 1px solid #ddd; box-shadow: 2px 3px #ddd;"  */}
			<div class="overlapping-div">
				<h1>Autocad Drawings</h1>
				<p>At Designocare, we provide international grade CAD modeling at competent prices. Our clients are able
					to focus on their
					core competences such as design and presentation and maximize the productivity of their internal
					resources while we take
					care of their drafting needs. Not only this, but outsourcing AutoCAD drafting with Designocare gives
					you the advantage
					of unparalleled turn around time.</p>

					{/* <div class='exp' id="exp-2" style='display: none;'>
					<p>When your design team finishes their job, it can immediately be continued by us. With work being
						completed 24/7, you can
						expand your projects in scale and scope seamlessly.</p>
					<p>At Designocare, we provide a variety of 2D & 3D AutoCAD drafting services that include mechanical
						drawings, paper to cad
						conversions, reverse engineering services, structural cad drawings, site plan renderings,
						elevation
						renderings, site
						overlays and photo montage. From shop drawings to product data, our professional drafters are
						experienced in the
						complete spectrum of CAD drawings either for presentation purposes or the submittal process.</p>
				</div> */}

				<button id="know-btn-2" onclick="toggle(this)" type="button" class="btn btn-light">Know more..</button>
			</div>
		</div>


		<div class="service-items" id="service-item-3">
			<img src={require('../../assets/img/services-img/3dScanning.jpg').default} alt="service-img" />
			<div class="overlapping-div">
				<h1>3D Scanning</h1>
				<p>Designocare offers low cost high resolution 3D digitizing services ideal for reverse
					engineering and dimensional
					control.
				</p>
				<p>
					We have blue light and white light scanners, helping us scan complicated geometries and
					make a replica of your
					part.</p>
				{/* <div class='exp' id="exp-3" style='display: none;'>
					<p>We can also scan you or your loved one, and do sculpting through a picture. Please contact
						us
						for more details on
						your requirement.</p>
				</div> */}

				<button id="know-btn-3" onclick="toggle(this)" type="button" class="btn btn-light">Know more..</button>
			</div>
		</div>



		<div class="service-items" id="service-item-4">
			<img src={require('../../assets/img/services-img/prototype.jpg').default} alt="service-img" />
			<div class="overlapping-div">
				<h1>Prototype</h1>
				<p>Ideas must be put to the test, that’s why we make prototypes; otherwise they will never be more
					than
					ideas. Rapid
					prototyping gives us the ability to test and examine ideas and developments throughout your project.
					This is the best
					way to guard against unnecessary risks and expensive mistakes. So we see prototyping as absolutely
					key to the success of
					product design – giving you the opportunity to see your product come to life in physical form in the
					most cost effective
					manner.</p>
				{/* <div class='exp' id="exp-4" style='display: none;'>
					<p>Our comprehensive in-house workshop facilities include 3D printing, high-speed CNC machining,
						vacuum
						resin casting,
						silicone moulding, vacuum forming and paint finishing. Along with conventional workshop tools,
						this
						allows us to create
						a wide range of prototypes in a variety of materials to suit the level of product development
						required, including but
						not limited to:</p>
					<p><strong>Appearance prototypes:</strong> The highly realistic appearance models we produce are
						invaluable when
						testing your product
						with the target audience. Once potential users have encountered a product, we can use their
						feedback
						and opinions to
						follow a knowledge-based design process. The properties of the proposed finished design and
						model
						are matched as closely
						as possible to the finished product so user reaction is as authentic and reliable as possible.
					</p>
				</div> */}

				<button id="know-btn-4" onclick="toggle(this)" type="button" class="btn btn-light">Know more..</button>
			</div>
		</div>
	</div>


	<div class="service-container" id='service-container-2'>
		<div class="service-items" id="service-item-5">
			<img src={require('../../assets/img/services-img/design.jpg').default} alt="service-img"/>
				{/* // style="border: 1px solid #ddd; box-shadow: 2px 3px #ddd;" */}
			<div class="overlapping-div">
				<h1>Design</h1>
				<p>We design products that are fit for market and purpose, and we achieve this through continuous
					iteration and refinement.
					Once we’ve established what is needed to make your product efficient and indispensible, we spare no
					effort to adjust and
					refine the design until it reaches its full potential. We incorporate the use of advanced
					engineering software, Fusion
					360, into our design process to create products that are beautiful, functional, reliable and
					manufacturable.
				</p>
				{/* <div class='exp' id="exp-5" style='display: none;'>
					<p>Engineering design combined with technical flair to bring your product to life. Driven by
						technical
						innovation and a
						wide experience of manufacturing, sustainability and value engineering, we look for the most
						cost-efficient way to
						build
						production-friendly products for you, while retaining the form and spirit of the original
						concept.
					</p>
					<p>Our vision: Your imagination and our product design skills, succeeding together</p>
					<p>We have worked with several IOT companies, Drone companies and entrepreneurs wanting to launch
						their
						own products.
					</p>
				</div> */}

				<button id="know-btn-5" onclick="toggle(this)" type="button" class="btn btn-light">Know more..</button>
			</div>
		</div>


		<div class="service-items" id="service-item-6">
			<img src={require('../../assets/img/services-img/soft-tooling.jpg').default} alt="service-img"/>
			<div class="overlapping-div">
				<h1>Soft Tooling</h1>
				<p>We work with the latest technology to develop optimised, plastic moulded parts. Often including
					injection moulding
					tooling in our product design process, we can expedite your journey to manufacture through expert
					tool development and
					multi-cavity scale-up.</p>
				{/* <div class='exp' id="exp-6" style='display: none;'>
					<p>Our effective measurement techniques are invaluable in high-volume production and we use
						engineering-grade polymers and
						material science, alongside the latest systems such as mould flow analysis and FEA, to ensure
						all
						your metrics are
						accurate and exact before any tools are deployed.</p>
				</div> */}

				<button id="know-btn-6" onclick="toggle(this)" type="button" class="btn btn-light">Know more..</button>
			</div>
		</div>




		<div class="service-items" id="service-item-7">
			<img src={require('../../assets/img/services-img/gifts.jpg').default} alt="service-img"/>
			<div class="overlapping-div">
				<h1>Customised Gifts</h1>
				<p>Every business or individual needs customised gifts to cherish its loved ones, customers, clients,
					business associates,
					financial partners and employees. Customised gifts help to forge new business relationships and
					fortify existing ones.</p>
				{/* <div class='exp' id="exp-7" style='display: none;'>
					<p>You can reinforce your brand or gift your employees unique trophies or surprise your loved ones.
						Keeping these benefits
						in mind, at Designocare, we craft unique and innovative gifts meticulously for you. Please find
						below our range of
						exclusive gift items for people who matter to you.</p>
				</div> */}

				<button id="know-btn-7" onclick="toggle(this)" type="button" class="btn btn-light">Know more..</button>
			</div>
		</div>
	</div>

</div>

<br /> 

<footer>
	<p>A finished product, ready and right for both the marketplace and
		your customers</p>
</footer>



<Footer/>
 
</>

  )
}
