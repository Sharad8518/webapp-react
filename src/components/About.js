import React from 'react'
import './About.css'

import logosd from './image/download.png'

function About() {
  return (


    <div className='aboutbox'>

    <div className='abtext'>

   <h3>ABOUT</h3>
   <h3  className='txtcolor'>APNEW</h3>
  
    </div>

    <img src={logosd}  className="icon"/>
 <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making i</p>



 
    </div>
  )
}

export default About