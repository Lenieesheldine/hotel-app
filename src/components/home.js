import Card from 'react-bootstrap/Card';
import homepage from "../components/images/desktop2img.png.webp";
import React, { useState } from 'react';



import { Container } from 'react-bootstrap';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../firebase';






import Navbar from './Navbar';
import Table from './table';
import Rooms from './rooms';
import About from './about';
import Contact from './contact';
import Readmore from './read';
import Login from './login';

function Home(){
  const [user,loading,error] = useAuthState(auth)
    return(
 <div>
  
  <Container className='homepage'>
   <Navbar/>
  <section class="jumbotron" id='home'>
  <div className='content'>
  </div>
</section>
</Container>
<Table/>
<Rooms/>
<About/>
<Contact/>
<Login/>

<br/><br/>

 </div>
 

 
    )
}
export default Home;