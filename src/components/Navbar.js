import './Navbar.css';
import logo from './ammazone2.jpg'
import React from 'react'
import phone from './Assets/phone.png'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div class="flex-container">
  <p className="head1">
    THE GREAT STORE
  </p>
    <div class = "flex3">
    <h1 class="logo"><Link to="/">
    <img src={logo} alt="Logo" />
    </Link></h1>
    </div>
<div class="flex3"> 
            <div class="flex-items"><Link to="/">Home</Link></div> 
            <div class="flex-items"><Link to='/Cart'>Cart</Link></div> 
            <div class="flex-items">Login</div> 
            </div>
</div> 

<section id="head">
        <div class="container">
            <div class="row">
                <div class="col-md-6"><img class="head-img1" src={phone} alt="" /></div>
                <div class="col-md-6 head-text">
                    <h6 class="h6">BEST QUALITY PRODUCTS</h6>
                    <h1>Join the Ecommerce Revolution</h1>
                    <p>ENJOY SHOPPING</p>
                </div>
            </div>
        </div>
    </section>

   
   
   </div>
  );
}

export default Navbar;
