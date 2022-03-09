import React from 'react'
import logo from './image/logo.png'
import './Topmenu.css'
import { FaAlignJustify} from "react-icons/fa";
import {Navbar } from 'react-bootstrap';




function Topmenu() {
  return (
    <div>
      <Navbar fixed="top" >
<div className='Nabvar'>
   
<img src={logo}  className="logo" />

<div className='menubox'>

<FaAlignJustify id="menuicon"/>

</div>


<nav>

<ul>

<li>HOME</li>

<li>ABOUT</li>

<li>FEATURES</li>

<li>PRICING</li>

<li>REVIEWS</li>

<li>SCREENSHOT</li>

<button>Download</button>

</ul>



</nav>



</div>
</Navbar>
</div>

  )
}

export default Topmenu