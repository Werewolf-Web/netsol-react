import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inputlist from './assets/Inputlist'
import Livelist from './assets/Livelist'
import Alllist from './assets/Alllist'

const App = () => {
  return (
    <div className='container py-3'>
    <div className='container d-flex gap-3'>
      {/* <div>
        <Inputlist/>
    </div>
    <div>
         <Livelist/>
    </div> */}
      <Container>
      <Row>
        <Col> <Inputlist/></Col>
        <Col></Col>
      </Row>
      </Container>
    </div>

          <div className='container py-3'>
            <Container>
              <Row>
                <Col> </Col>
              </Row>
            </Container>
         
          </div>
    </div>
  )
}

export default App