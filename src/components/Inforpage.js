 import React from 'react'
 import "./Inforpage.css"
 import { FaHeart,FaClock,FaCog } from "react-icons/fa";

 function Inforpage() {
   return (
     <div className='containerbc'>

<div className='content'>


<div className='rowIn'>

<div className='iconbox'>

<FaClock  className='iconinone'/>





</div>

<h4>24/7 Support</h4>

<p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
</div>

<div className='rowIn'>
<div className='iconbox'>

<FaHeart  className='iconinone'/>



</div>

<h4>User Friendly</h4>

<p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

</div>


<div className='rowIn'>

<div className='iconbox'>

<FaCog  className='iconinone'/>



</div>

<h4 style={{

marginLeft:"120px"


}}>Easy To Customize</h4>

<p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
</div>


</div>

     </div>
   )
 }
 
 export default Inforpage