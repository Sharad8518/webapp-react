import React from 'react'
import "./Download.css"
import adult from "./image/adult.jpg"
import logo from "./image/download.png"
import { Row,Container,Col } from 'react-bootstrap';
import { FaAndroid,FaApple,FaWindows } from 'react-icons/fa';



function Download() {
  return (
    <div  className='downloadtxt'>


<div className='boxdown'>

<img src={adult} className="imgdown"/>










</div>
<div className='overlaydw'>


</div>

<div className='boxthdown'>

<div className='boxthsndown'>
  <div className='txtdown'>
<h2  style={{

color:"#fff",
marginRight:"10px"

}}>DOWNLOAD OUR</h2>

<h2  style={{

color:"#7b9c6c"


}}>LATERSTAPP</h2>



</div>

<img src={logo} className="logodw"/>

<p  className='ptxtd'>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>

</div>

<div className="smallbox">

<Container>
  <Row className="justify-content-md-center">
    <Col xs lg="3">
      <div className='minbox'>

     <FaApple  className="logodw"/>


      <div className='iconbxdw'>
 
     <p>Available on the</p>
     <h5>App Store</h5>

</div>


      </div>
    </Col>
    <Col xs lg="2">
    <div className='minbox'>

<FaAndroid   className="logodw"   />

    <div className='iconbxdw'>

    <p>Available on the</p>
     <h5>Play Store</h5>

</div>


</div>
    </Col>
  </Row>
</Container>


</div>


</div>


















    </div>
  )
}

export default Download