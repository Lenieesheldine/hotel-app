import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import aboutroom from './images/aboutroom.webp';
import about2 from './images/about2.webp';




function Contact (){
    return(
        <div>
<h1>Contact</h1>
<Container className="contact" id="contact">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={aboutroom} height="300px"/>
     </Card>
     <div className="info">
        <h3>contact info</h3>
        <h5>Address</h5>
        <h6>510 Bantustreet,new Mark<br/>
            Kimberley
        </h6>
        <h5>Phone no.</h5>
        <h6>(+00) 123 546 8709</h6>
         <h5>E-Mail</h5>
         <h6>missQ@gmail.com</h6>
     </div>

     <div className="pic2">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={about2} />
    </Card>
    </div>


<div className="hotel">
<>
    
      <br />
      <Form.Control type="text" placeholder="Your Name" />
      <br />
   
    </>
         
          <Form>
      <Form.Group className="mb-3" controlId="Your Name">
       
        <Form.Control type="email" placeholder="E-mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="write massage" >
      
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <>
      
      {' '}
      <Button variant="secondary" size="lg" active className="button1">
        Button
      </Button>
    </>
    </div>
   
            
            </Container>  
        </div>
       
    )
}
export default Contact;