import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const App = () => {

  const [text, setText] = useState('');
  const [output, setOutput] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  const handleall = () => {
    if (text.trim() === "") return;

    const newItem = { text: text };
    setOutput([...output, newItem]);
    setText("");
  };

  return (
    <div>

      <div className='container px-2 py-4 d-flex gap-3'>
        <textarea 
          placeholder='enter something' 
          className='form-control'
          value={text}
          onChange={handleChange}
        />

        <Button 
          className="btn btn-light" 
          onClick={handleall}
          style={{ backgroundColor: "rgba(154, 190, 245, 1)" }}
        >
          Submit
        </Button>
      </div>

      <div className='container'>
        <p className='mt-3' style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>
      </div>

      <div className='container mt-4'>
        <h4>All Messages:</h4>

        {output.map((item, index) => (
          <p 
            key={index} 
            style={{ whiteSpace: "pre-line", padding: "8px", background: "#f2f2f2", borderRadius: "5px", marginBottom: "10px" }}
          >
            {item.text}
           
          </p>
          
        ))}
       

      </div>

    </div>
  )
}

export default App
