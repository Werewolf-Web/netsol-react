// // import Container from 'react-bootstrap/Container';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';

// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// const App = () => {

//   const [text, setText] = useState("");
// const [work, setWork] = useState("");
// const [output, setOutput] = useState([]);


// const handleSubmit = () => {
//   if (text.trim() === "" || work.trim() === "") return;

//   // Store both values in one object
//   const newItem = {
//     title: text,
//     work: work
//   };

//   setOutput([...output, newItem]);

//   setText("");
//   setWork("");
// };


//   return (
//     <div
//       className=" px-5  container py-5 align-items-center"
//     >
      
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
//       placeholder="Enter your tital"
//       value={text}
//       style={{ width: "250px" }}

//        onChange={(e) => setText(e.target.value)}
        
//     />
//          <input
//       type="text"
//       className="form-control"
//       placeholder="Enter your work"
//       value={work}
//       style={{ width: "250px" }}

//        onChange={(e) => setWork(e.target.value)}
        
//     />
//     <Button className="btn btn-light "  onClick={handleSubmit}  
//     style={{backgroundColor:"rgba(154, 190, 245, 1)"}}
//     >Submit</Button>
//   </div>
    

// </div>
//           <ul>
           
//             {output.map((item, index) => (
//            <li key={index}>
//            Title  : {item.title}  <br/>Work  : {item.work} <br/><h5>-------------------</h5>
//            </li>
          
//   ))}
  
 
// </ul>


//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
   const [num, setNum] = useState(0);

function increseNum(){
setNum(num+1)
}
function decrieseNum(){
setNum(num-1)
}
  return (
   
    <>
    <div className='container'>
    <h3>{num}</h3>
    <button onClick={increseNum} className='px-2 py-2'>incriese +1</button>
    <button onClick={decrieseNum} className='px-2 py-2'>decriese -1</button>
    </div>
    </>
  )
}

export default App

