// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// const App = () => {

//   const [text, settext] = useState("")
//   const [output, setoutput] = useState("")


//   const handleSubmit = () => {
//     setoutput(text);     // input → output
//     settext("");         // clear input
//   };

//   return (
//     <div
//       className=" px-5  container py-5 align-items-center"
//     >
//       {/* <Container>
//         <Row
//           className='text-center px-4 py-4'>
//           <Col sm={12}> TO Do List
//           </Col>
//         </Row>
//       </Container>
//       <Container>


//         <Row className='bg-success'>
//           <Col sm={8}>
            
//           </Col>
//           <Col sm={4} className='bg-danger'>
           

//           </Col>
//         </Row>
//   <Row>
//           <Col xs lg="2" className='text-center' >
//          <h4>List :</h4>
//         </Col>
//         <Col className='bg-primary'>
//           <input type="text"
//               className="d-block form-control"
//               name="firstName"
//               id="firstName"
//               placeholder="Enter your list "
//             />
//         </Col>
//         <Col md="auto">
//          <Button className='d-block'> Submit</Button>
//         </Col>

    
//       </Row>

//       </Container> */}
//    <div
//   className="container py-3 d-flex justify-content-center align-items-center"
//   style={{ backgroundColor: "rgba(255, 240, 240, 1)" }}
// >
//   <div className=" p-3 d-flex justify-content-center align-items-center gap-3 rounded"
//       // style={{ backgroundColor: "rgba(218, 229, 245, 1)" }}
//   >
//     <h4 className=" m-0"
//     style={{color:"rgba(134, 132, 132, 1)" }}
//     >TO Do List :</h4>

//     <input
//       type="text"
//       className="form-control"
//       placeholder="Enter your list"
//       value={text}
//       style={{ width: "250px" }}

//        onChange={(e) => settext(e.target.value)}
        
//     />

//     <Button className="btn btn-light "  onClick={handleSubmit}  
//     style={{backgroundColor:"rgba(154, 190, 245, 1)"}}
//     >Submit</Button>
//   </div>
    

// </div>
//           <h3 className="mt-4">{output}</h3>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Car from './Car'

const App = (props) => {
  return (
    <div className='d-flex gap-3'>
    <Car name="mustang" model="1969" price="230030"/>
    <Car name="BMW" model="2000" price="230030"/>
    <Car name="OMG" model="2012" price="230030"/>
    </div>
  )
}

export default App
