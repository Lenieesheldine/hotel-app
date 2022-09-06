
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';



import bed1 from "../components/images/bed1.jpg"
import bed4 from "../components/images/bed4.png"
import bed5 from "../components/images/bed5.jpg"
import { Container } from 'react-bootstrap';
import famrooms from "../components/images/famrooms.jpg"
import hotelroom1 from "../components/images/hotelroom1.jpg"

import bedroom from "../components/images/bedroom.jpg"


import minibar from "../components/images/minibar.png"
import cricket from "../components/images/cricket.png"
import hairdryer2 from "../components/images/hairdryer2.png"
import fireexit from "../components/images/fireexit.png"
import parking from "../components/images/parking.png"
import skates from "../components/images/skates.png"
import { useNavigate } from 'react-router-dom';

import { NavLink } from "react-router-dom";

import Readmore from './read';


function About(){

  const navigate = useNavigate();

 

  const About = ()=>{

 

    navigate('/Read')
}



    return(
        <>
        <h1>About us</h1>
    <Container className='about' id='about'>
    <div className='image'>
          <Card.Img variant="bottom" src={bedroom} height='300px' width='50px' className='picture' />
        </div>
        <div className='about-text'>
          <h5 style={{margin: '20px'}}><i>About The Hotel</i></h5>

          
       
        <Card.Text id='text'>
         We are here to make you feel at home no matter what!!
         So feel at home for a goodnight sleep that gives you new strenght for each day.
         
        </Card.Text>
       <button onClick={About} className='btnbtn'>Read more</button>



       <small>need a goodnight sleep</small> <NavLink  to="/readmore">
       BOOK NOW
      </NavLink>
        </div>
        </Container>

      <br/><br/>
<h1>Hotel Features</h1>
 <div className='icon'>
<div className='minibar'><img href='' src={minibar}/><br/>
<h6>minibar</h6>
</div>
<div className='ket'><img href='' src={cricket}/><br/>
<h6>cricket field</h6>
</div>
<div className='fire' ><img src={fireexit}/><br/>
<h6>fire exit</h6>
</div>
</div>

<div className='icons'>
<div className='park'><img src={parking}/><br/>
<h6>parking place</h6>
</div>
<div className='hair'><img src={hairdryer2}/><br/>
<h6>hair dryer</h6>
</div>
<div className='skates'><img src={skates}/><br/>
<h6>skate field</h6>
</div>

</div>



        </>
    )
}
export default About;