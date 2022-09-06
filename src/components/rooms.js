import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import relex from "../components/images/relex.jfif"
import slide5 from "../components/images/slide5.jpg"
import pdf from "../components/images/pdf.webp"
import lastslide from "../components/images/lastslide.jfif"
import bed3 from "../components/images/bed3.jpg"
import bed1 from "../components/images/bed1.jpg"
import bed5 from "../components/images/bed5.jpg"
import rome from "../components/images/rome.jpg"
import Card from 'react-bootstrap/Card';
import famrooms from "../components/images/famrooms.jpg"
import relax2 from "../components/images/relax2.jpg"
import hotelroom1 from "../components/images/hotelroom1.jpg"
import singleroom1 from "../components/images/singleroom1.jpg"
import bedroom from "../components/images/bedroom.jpg"


import { NavLink } from "react-router-dom";
import Readmore from './read';


import minibar from "../components/images/minibar.png"
function Rooms(){
  return(
    <div>
     <h1>Our Rooms(SERVICES)</h1>  
<Container id="rooms">
  <div className="services">
<Carousel>
      <Carousel.Item interval={1000}> 
        <img
          className="d-block w-90"
          src={slide5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Room 1</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-90"
          src={rome}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Room 2</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={bed1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Room 3</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-90"
          src={bed3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Room 4</h3>
          
        </Carousel.Caption>
      </Carousel.Item> <Carousel.Item>
        <img
          className="d-block w-90"
          src={singleroom1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Room 5</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={relax2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Room 6</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src={relex}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Room 7</h3>
          
        </Carousel.Caption>
      </Carousel.Item> <Carousel.Item>
        <img
          className="d-block w-90"
          src={hotelroom1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Room 8</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={famrooms}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Room 9</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
     </div>

     <small>enjoy a goodnight sleep</small> <NavLink  to="/readmore">
       BOOK NOW
      </NavLink>
</Container>
    </div>
 
  )
}
export default Rooms;