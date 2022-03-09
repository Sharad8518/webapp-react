import React from 'react'
import './Home.css'
import Topmenu from './Topmenu'
import mobile from './image/mobiletwo.png'
import { Container,Row,Col } from 'react-bootstrap';
import {FaApple,FaCloudDownloadAlt  } from 'react-icons/fa';
import {GrAndroid  } from "react-icons/gr";

function Home() {
  return (
    
<div>

    <div className='main'>

<br></br>


<div className='box'>

<Container>
  <Row  style={{display:"flex"}}> 
    <Col style={{width:'700px'}}>
    
    <div className='bxone'>
    
    <h1>AWESOME</h1>
    
<div className='text'>

<h1 className='txcolor'>APNEW</h1><h1>MOBILE</h1>




</div>

<h1 className='txsecond'>APP.</h1>

<p   className='ptxt'    style={{color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>


<div className='btn'>

<button className='active'> DOWNLOAD</button>

<button>LEARN MORE</button>
</div>



    </div>
    
    </Col>
    <Col  xs={6} md={4}>
        
      
        
        </Col>
  </Row>

  </Container>

</div>




    </div>


<img src={mobile}  className="mobile"
       
    


    />



<div className='appnm'>

<div className='circle'>

<GrAndroid className='iconone'/>
<h3>ANDROID</h3>
<p>102K</p>

</div>

<div className='circle'>

  <FaCloudDownloadAlt className='icontwo'/>

  <h3>DOWNLOAD</h3>
<p>102K</p>
</div>

<div className='circle'>

<FaApple className='iconthree'/>
<h3>IOS</h3>
<p>102K</p>
</div>

  
</div>
</div>
  )
}

export default Home