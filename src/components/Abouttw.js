import React from 'react'
import "./Abouttw.css"
import mbimg from "./image/mobileone.png"



function Abouttw() {
  return (
    <div>

<div className='rowab'>

<div className='colab'  >   


<img src={mbimg}/>


</div>


<div className='colac'>   

<div className='textab'>

<h4>BEST</h4>
<h4  className='txtcolorab'>MOBILE APP</h4>


</div>
<br></br>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web </p>

<br></br>


<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>

<div className='btnab'>

<button className='active'>DOWNLOAD</button>
<button>LEARN MORE</button>

</div>




</div>


</div>



    </div>
  )
}

export default Abouttw