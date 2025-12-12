import React from 'react'
import Button from 'react-bootstrap/Button';


const Livelist = ({name,description}) => {
  return (
    
        
      <div 
      className="container bg-dark text-white py-4"
      style={{
        height: "380px",
        width: "500px",
        borderRadius: "20px",
        margin: "50px auto"
      }}
    >
    <h1>Live List</h1>
    <p>name  : {name}<br/>To Day Work  : {description}</p>
    </div>
    
  )
}

export default Livelist