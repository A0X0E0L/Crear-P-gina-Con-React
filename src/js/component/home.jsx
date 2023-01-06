import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (<>
	
	       <Navbar/>
	        <Jumbotron/>
			<div className="container text-center">
  <div className="row">
    <div className="col-lg-3 px-5">
	<Cards/>
    </div>
    <div className="col-lg-3 px-5">
	<Cards/>
    </div>
    <div className="col-lg-3 px-5">
	<Cards/>
    </div>
	<div className="col-lg-3 px-5">
	<Cards/>
    </div>
  </div>
</div>
			
			<Footer/>
			</>
	)
};

export default Home
