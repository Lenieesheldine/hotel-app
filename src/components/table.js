
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

function Table(){
    return(
<section>


<div className='table'>

        <Row>

<Col><label>Check In</label><br></br><input type="date"></input></Col>
<Col><label>Check Out</label><br></br><input type="date"></input></Col>     
<Col><label>Guests</label><br></br><Form.Select aria-label="Default select example">
<option>#Select</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select></Col>
<Col><label>Click!</label><br></br> <Button variant="danger">Check Availability</Button>{' '}</Col>
</Row>    

    </div>



</section>
    )
}
export default Table;