import React from 'react'
import './Review.css'
import logo from './image/download.png'
import { Carousel } from 'react-bootstrap';

function Review() {
  return (
    

<div className='boxrw'>

<div className='testrw'>

<h3>APP</h3><h3 className='txtrwcolor'>REVIEWS</h3>


</div>

<img src={logo} className="logorw"/>

<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 

</p>


<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.vecteezy.com/system/resources/previews/002/543/675/non_2x/environment-earth-day-in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on-nature-field-grass-forest-conservation-concept-photo.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.vecteezy.com/system/resources/previews/002/543/675/non_2x/environment-earth-day-in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on-nature-field-grass-forest-conservation-concept-photo.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.vecteezy.com/system/resources/previews/002/543/675/non_2x/environment-earth-day-in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on-nature-field-grass-forest-conservation-concept-photo.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





</div>


  )

  
}

export default Review