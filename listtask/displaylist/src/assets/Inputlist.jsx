import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Alllist from './Alllist';
import Livelist from './Livelist';

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
    <><div 
  className="container py-4"
  style={{
    color:"rgba(134, 131, 131, 1)",
    borderRadius:"20px",
    margin:"50px auto",
    backgroundColor:"rgba(226, 226, 226, 1)",
    display: "flex",
    gap: "30px",
    width: "90%",
    padding: "20px"
  }}
>

  {/* LEFT SIDE – FORM */}
  <div style={{ width: "400px" }}>
    <h1 className="text-center mb-4">Input-list</h1>

    <form className="d-flex flex-column gap-4">

      <div className="d-flex flex-column">
        <label className="fw-bold fs-6 mb-2">Name:</label>
        <input 
          type="text"
          placeholder="Enter your name !"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="d-flex flex-column">
        <label className="fw-bold fs-6 mb-2">Description:</label>
        <input 
          type="text"
          placeholder="Enter your Work Description !"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

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
  </div>

  {/* RIGHT SIDE – LIVE LIST */}
  <div style={{ flex: 1 }}>
    <Livelist name={name} description={description}/>
  </div>
</div>
<div>
    <Alllist output={output}/>
</div>
</>


  );
};

export default Inputlist;
