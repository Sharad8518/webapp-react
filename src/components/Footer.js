import React from 'react'
import './Footer.css'
import {Container,Row,Col, InputGroup} from 'react-bootstrap'
import logofr from './image/download.png'
import { FaPhoneAlt,FaPeriscope,FaGlobe,FaFacebookF,FaGooglePlusG,FaTwitter,FaLinkedinIn,FaYoutube} from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

function Footer() {
  return (
    <div>

<div className="boxfr">
</div>

<div className="minboxfr">

<div className='smallbox'>

<div className='textfr'>

<h2  className='txtcol'>GET</h2><h2  className='txtcolorfr'>IN TOUCH</h2>

</div>

<img src={logofr}  className='logofr'/>

<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

</div>

<div className='detailfr'>


<Container>
  <Row>
    <Col>
    
    <div className='boxtfooter'>
  <h2  style={{

color:"#fff",
fontWeight:"700"



  }}>SAY  HELLO!</h2>


<input type="text" placeholder='Name'/>

<input type="text" placeholder='Email'/>
<br></br>
<textarea cols={36} rows={5} placeholder="message" style={{

color:"#fff"


}} >
</textarea>
<br></br>
<input type="submit" value="Submit"/>

    </div>
    
    
    
    </Col>
    <Col>
    <div className='boxfootersd'>

    <h2  style={{

     color:"#fff",
     fontWeight:"700"

    }}>CONTACT US</h2>

<div className='detailboxsd'>
<Row   className=".mt-5">
    <Col>
    <div className='icon1bx'>

  <FaPhoneAlt className='icon1'/>
     

    </div>





    <div className='icon1bx'>

  <FaGlobe className='icon1'style={{

color:"#fff"


  }}/>
     

    </div>
 


    <div className='icon1bx'>

<FaPeriscope className='icon1'/>
   

  </div>

  </Col>
    
    <Col xs={0} md={10} >
    
  <div className='contectdetail'>


  <div className='boxct'>
    <p>+012 345 678 102</p>
<p>+012 345 678 102</p>
</div>

<div className='boxct'>
<p>mailto:support@devitems.com</p>
<p>https://devitems.com/</p>
</div>

<div className='boxct'>
<p>Dev Items address goes here,</p>
<p>street,Crossroad123.</p>
</div>


</div>



    </Col>
  </Row>
   
  </div>


    </div>
    
    
    
    
    </Col>
  </Row>
  
  
</Container>




</div>
<div className='socailbox'>

<h2>SUBSCRIBE FOR OUR NEWSLETTER</h2>

<p>There are many variations of passages of Lorem Ipsum available,
but the majorityhave alteration in some form, by injected humour,available

</p>

<div className='userinput'>

<form>
<input type="text" placeholder='Enter your Email Address' style={{

color:"#fff"

}}/>

<input type="submit" value="SUBCRIBE"/>
</form>




</div>
<div className='socialicon'>


<div id='iconsnd'>

<FaFacebookF className='iconfrone'/>

</div>


<div id='iconsnd'>

<FaGooglePlusG className='iconfrone'/>

</div>

<div id='iconsnd'>

<FaLinkedinIn className='iconfrone'/>

</div>

<div id='iconsnd'>

<FaTwitter className='iconfrone'/>

</div>

<div id='iconsnd'>

<FaYoutube className='iconfrone'/>

</div>


{/* company name  */}



</div>

<div className="company">

  <div className='txtcolcom'>
<h2   style={{

marginRight:"10px",
fontSize:"20px"


}}>DEVELOP AND  </h2><br></br>
<h2    style={{

marginRight:"10px",
fontSize:"20px",
color:"#7b9c6c"

}} >DESIGN BY</h2>


</div>
<h6>SoftSeekar Infotech Privite Limited</h6>
<div>


</div>



</div>
</div>


</div>










</div>


  )
}

export default Footer