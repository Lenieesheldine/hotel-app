import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import { useState } from "react";
import {auth} from '../firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword}from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

import {db} from '../firebase'

import {addDoc, collection} from 'firebase/firestore'


function Signup(){


     
  const add = (() => {
    const collectionRef = collection(db, 'bookings');

    const bookings = {
        name: 'b'
    };

    addDoc(collectionRef, bookings)
    .then(() => {
        alert('Added successfully')
    })
    .catch((error) => {
        console.log(error)
    })
})


  const navigate = useNavigate() ;
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");




  const Signup = ()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(auth=>{navigate('/home')})
    .catch(error=>console.error(error))
      } 



    return(
      <div>
        <h1>Sign Up</h1>
        <Container className="signin">
        
      
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(event)=>setEmail(event.target.value)}   type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(event)=>setPassword(event.target.value)}    type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Usename</Form.Label>
        <Form.Control placeholder="usename" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address </Form.Label>
        <Form.Control placeholder="Adress" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Nothern Cape">
            <option>Choose...</option>
            <option>Nothern Cape</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" onClick={Signup} type="submit">
        Submit
      </Button>
      


    


        </Container>
      </div>  
    )
}
export default Signup;