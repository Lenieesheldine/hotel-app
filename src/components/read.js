

import {db} from '../firebase'

import {addDoc, collection} from 'firebase/firestore'

import read from './images/read.jpg'
import { useState } from 'react'
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import bed1 from '../components/images/bed1.jpg'
import standardroom2 from '../components/images/standardroom2.jpg'
import bed3 from '../components/images/bed3.jpg'
import famrooms from '../components/images/famrooms.jpg'

import bed4 from '../components/images/bed4.png'
import luxury from '../components/images/luxury.jpg'
import relex from '../components/images/relex.jfif'
import singleroom1 from '../components/images/singleroom1.jpg'





function Readmore(){

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
const[guests,setGuest] = useState("");
const[checkin,setCheckin] = useState("");
const[checkout,setCheckout] = useState("");
const[timein,setTimein] = useState("");
const[timeout,setTimeout] = useState("");



const add = (() => {
  const collectionRef = collection(db, 'bookings');

  const bookings = {
      name:name , email:email , phone:phone , guests:guests, checkin:checkin , checkout:checkout, timein:timein ,timeout:timeout
  };

  addDoc(collectionRef, bookings)
  .then(() => {
      alert('Added successfully')
  })
  .catch((error) => {
      console.log(error)
  })
})
    return(
     
<Container className='bookroom'>
<h1>BOOK NOW</h1>
<div className='roomz1'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bed1} />
      <Card.Body>
        <Card.Title>Deluxe Room</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={standardroom2} />
      <Card.Body>
        <Card.Title>Standard Room</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bed3} />
      <Card.Body>
        <Card.Title>Luxury Room</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={famrooms} />
      <Card.Body>
        <Card.Title>Family Room</Card.Title>
      </Card.Body>
    </Card>
    </div>

<div className='roomz2'>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bed4} />
      <Card.Body>
        <Card.Title>Two Bed Room</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={luxury} />
      <Card.Body>
        <Card.Title>Luxury Room</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={relex} />
      <Card.Body>
        <Card.Title>Deluxe Room</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={singleroom1} />
      <Card.Body>
        <Card.Title>Single Room</Card.Title>
      </Card.Body>
    </Card>
</div>
       
  
        <div className="sectionTitle">Join <span>Us</span> </div>
        <div className="container">
        <div className='secondbox'>
        <img src={read} ></img>
        </div>


<div className='form'>
<small>Book online.Day rooms with same day  check-in and check-out.</small>


<input type="text" placeholder=' Your name'  onChange={(event)=>setName(event.target.value)}></input>
<br></br>
<input type="text" placeholder=' Email Address'  onChange={(event)=>setEmail(event.target.value)}></input>
<br></br>
<input type="text" placeholder='Phone number'  onChange={(event)=>setPhone(event.target.value)}></input>
<br></br>

<Col><br></br><Form.Select aria-label="Default select example" onChange={(event)=>setGuest(event.target.value)}>

<option>Guests</option>

<option value="1">One</option>

<option value="2">Two</option>

<option value="3">Three</option>
<option value="4">four</option>
<option value="5">five</option>

</Form.Select></Col>
<br></br>

<div className='form-check-in' >

<input type="date"  onChange={(event)=>setCheckin(event.target.value)} ></input>
<input type="date"  onChange={(event)=>setCheckout(event.target.value)} ></input>
</div>
<div className='form-check-out'>
<input type="time"  onChange={(event)=>setTimein(event.target.value)} ></input>
<input type="time"  onChange={(event)=>setTimeout(event.target.value)} ></input>

</div>
<div className='form-button'>

</div>
</div>
<div className='form-box'>








</div>

</div>
  
    </Container>
    )
}
export default Readmore;






