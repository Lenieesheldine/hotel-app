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


import { NavLink } from "react-router-dom";

import Signup from "./signup";

function Login (){

  
  const navigate = useNavigate() ;
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");


  const signIn = ()=>{
signInWithEmailAndPassword(auth,email,password)
.then(auth=>{navigate('/home')})
.catch(error=>console.error(error))
  } 

 
 
  return(
        <div>
           <h1> Log In</h1>
          <Container className="login">
          <Form >
      <Form.Group className="password" controlId="formBasicEmail" id="login" >
        <Form.Label>Email address or UseName</Form.Label>
        <Form.Control onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="password" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control   onChange={(event)=>setPassword(event.target.value)}   type="password" placeholder="" />
      </Form.Group>
      <div className="middel">
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Forget password?" />
      </Form.Group>
     
     <Button variant="primary" onClick={signIn} type="submit">
        Log In
      </Button>

      <small>Don't have an account</small> <NavLink  to="/signup">
       cerate account
      </NavLink>
     
      </div>
    </Form>
<br/>

  

     
            </Container>  
        </div>
    )
}
export default Login;