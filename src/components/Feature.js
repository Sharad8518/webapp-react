import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import "./Feature.css"
import logo from "./image/download.png"
import { FaFileAlt ,FaHtml5,FaDesktop,FaAsterisk,FaPaintBrush} from 'react-icons/fa';
import mobiledev from './image/mobiledev.png'

function Feature() {
  return (
    <div>

<div className='boxfea'>

<div className='txtfea'>
<h5>AWESOME</h5>
<h5 className='txtcolfea'>FEATURES</h5>
</div>

<img src={logo}  className="logofea"/>

<div className='ptext'>
<p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
</div>


</div>

<div>


<Container>
  <Row>
    <Col>
    <div className='imgdevmb'>
    <img src={mobiledev}  className="imgmob" style={{

      marginTop:"200px",
      marginLeft:"-100px"
    }}/>
    
    </div>
    </Col>



    <Col>
    
    <br></br>
    <br></br>
    <Row>

 <Col>

<div className="boxfeature" style={{

marginLeft:"-60px",
marginTop:"-20px",



}}>

<Col>
 <div id="iconboxfea" style={{

width:"110px",
height:"105px",
background:"#7b9c6c",
marginTop:"10px",
borderBottomLeftRadius:"20px",
borderTopRightRadius:"20px"

}}>

<FaFileAlt className='iconfear'   style={{

width:"50px",
height:"50px",
marginTop:"25px",
marginLeft:"30px",
color:"#fff"


}}/>


 </div>

 </Col>
 <Col  xs={0} md={10} >

<div   className='detailfea' style={{

marginLeft:"10px"

}}>

<h6 style={{

fontSize:"30px"

}}>Unlimited Features</h6>

<p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available</p>
</div>
</Col>
</div>




</Col>



<Row>
<Col>

<div className="boxfeature" style={{

marginTop:"30px",
marginLeft:"-30px"

}}>
<Col>
 <div id="iconboxfea" style={{

width:"115px",
height:"105px",
background:"#7b9c6c",
marginTop:"10px",

borderTopRightRadius:"20px",
borderBottomLeftRadius:"20px"

}}>

<FaAsterisk className='iconfear'    style={{

width:"50px",
height:"50px",
marginTop:"25px",
marginLeft:"30px",

color:"#fff",




}}/>



 </div>

 </Col>
 
<Col  xs={0} md={10} >
<div style={{

marginLeft:"10px"

}}>

<h6 style={{

fontSize:"30px"

}}>High Resolution</h6>

<p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available</p>
</div>
</Col>
</div>


</Col>


</Row>



<Row>
<Col>

<div className="boxfeature" style={{
marginTop:"30px",

}}>

<Col>
 <div id="iconboxfea"style={{

width:"110px",
height:"105px",
background:"#7b9c6c",
marginTop:"10px",
borderTopRightRadius:"20px",
borderBottomLeftRadius:"20px"
}}>

<FaPaintBrush className='iconfear'   style={{

width:"50px",
height:"50px",
marginTop:"25px",
marginLeft:"30px",
color:"#fff"

}}
/>


 </div>

 </Col>
 
<Col   xs={0} md={10}     >

<div  style={{

marginLeft:"10px"

}}>

<h6 style={{

fontSize:"30px"

}}>Moden  Design</h6>

<p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available</p>
</div>
</Col>
</div>
</Col>


</Row>


<Row>
<Col>

<div className="boxfeature"  style={{
marginLeft:"-30px",
marginTop:"30px"

}}>


<Col>
 <div id="iconboxfea" style={{

width:"110px",
height:"105px",
background:"#7b9c6c",
marginTop:"10px",
borderTopRightRadius:"20px",
borderBottomLeftRadius:"20px"
}}>  

< FaDesktop className='iconfear'    style={{

width:"50px",
height:"50px",
marginTop:"25px",
marginLeft:"30px",
color:"#fff"}}
/>


 </div>

 </Col>
 
<Col  xs={0} md={10}  >
<div  style={{

marginLeft:"10px"

}}>

<h6 style={{

fontSize:"30px"

}}>Unique Design</h6>

<p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available</p>
</div>
</Col>

</div>
</Col>


</Row>



<Row>
<Col>

<div className="boxfeature" style={{

marginLeft:"-70px",
marginTop:"30px"

}}  >

<Col>
 <div id="iconboxfea" style={{

width:"110px",
height:"105px",
background:"#7b9c6c",
marginTop:"10px",
borderTopRightRadius:"20px",
borderBottomLeftRadius:"20px",
}}>

<FaHtml5 className='iconfear'  style={{

width:"50px",
height:"50px",
marginTop:"25px",
marginLeft:"30px",
color:"#fff"



}}/>


 </div>

 </Col>
 
<Col  xs={0} md={10} >
<div style={{

marginLeft:"10px"

}}>

<h6 style={{

fontSize:"30px"

}}>Clean Code</h6>

<p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available</p>
</div>
</Col>

</div>
</Col>


</Row>















    </Row>
    
    
    
    
    
    
    </Col>
  </Row>

</Container>


</div>





    </div>
  )
}

export default Feature