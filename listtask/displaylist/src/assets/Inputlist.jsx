import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Inputlist = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [output, setOutput] = useState([])



const handleSubmit = () => {
  if (name.trim() === "" || description.trim() === "") return;
      const newItem = {
    name: name,
    description :description
  };

// export default App
  setOutput([...output, newItem]);

  setName("");
  setDescription("");
};

  return (
    <div 
      className="container py-4"
      style={{
        height: "380px",
        color:"rgba(134, 131, 131, 1)",
        width: "500px",
        borderRadius: "20px",
        margin: "50px auto",
        backgroundColor:"rgba(226, 226, 226, 1)"
      }}
    >
      <h1 className="text-center mb-4">Inputlist</h1>

      <form className="d-flex flex-column gap-4">

        {/* NAME */}
        <div className="d-flex flex-column">
          <label className="fw-bold fs-6 mb-2">Name:</label>
          <input 
            type="text" 
            placeholder="Enter your name !" 
            className="form-control"
            style={{ height: "38px" }}
            value={name}
             onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="d-flex flex-column">
          <label className="fw-bold fs-6 mb-2">Description:</label>
          <input 
            type="text" 
            placeholder="Enter your description !" 
            className="form-control"
            style={{ height: "38px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* ADD BUTTON */}
        <div className="text-center">
          <Button 
            style={{ 
              width: "150px", 
              backgroundColor: "#6c9cff",
              border: "none",
              fontWeight: "bold"
            }}
            onClick={handleSubmit}  
          >
            Add
          </Button>
        </div>

      </form>
      <div>
        <ul>
            {output.map((item,index)=>(
                <li key={index}>{item.name}</li>
            ))}
            {output.map((item,index)=>(
                <li key={index}>{item.description}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Inputlist;
