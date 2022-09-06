

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










function Forgotpassword(){


    
const add = (() => {
    const collectionRef = collection(db, 'bookings');

    const bookings = {
        email:email, password:password
    };

    addDoc(collectionRef, bookings)
    .then(() => {
        alert('Added successfully')
    })
    .catch((error) => {
        console.log(error)
    })
})

    const navigate = useState('');
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    return(
        <div>
              <Form className="forget">
        <h3>Forgot Your Password</h3>
      <Form.Group className="box" controlId="formBasicEmail">
        <h6>Usename or Password</h6>
        <Form.Control onChange={(event)=>setEmail(event.target.value)}  type="email" placeholder="your@email.com" />
       
       </Form.Group>
<br/>
      <Form.Group  className="box" controlId="formBasicPassword">
    <Form.Control onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Send Password Reset Email" />
      </Form.Group>
      
      <button onClick={add}>Add</button>
      </Form>
        </div>
    )
}
export default Forgotpassword;