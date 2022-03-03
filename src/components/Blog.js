import React from 'react'
import './Blog.css'
import logo from './image/download.png'
import { Button,Card, Container,Row,Col } from 'react-bootstrap';
import img from './image/img1.jpg'

function Blog() {
  return (
      <div>
    <div className='boxub'>

<div className='textub'>

<h4>OUR</h4><h4 className='txtubcolor'>BLOG</h4>

</div>

<img src={logo}  className="logoub"/>

<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>













    </div>
<Container>

<Row>

<Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="outline-success" >Go somewhere</Button>
  </Card.Body>
</Card>


</Col>
<Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="outline-success">Go somewhere</Button>
  </Card.Body>
</Card>


</Col>

<Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="outline-success">Go somewhere</Button>
  </Card.Body>
</Card>


</Col>






</Row>



</Container>
    </div>

  )
}

export default Blog