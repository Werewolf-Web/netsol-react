import React from 'react'
import Button from 'react-bootstrap/Button';

const Alllist = ({ output, setOutput }) => {
  return (
    <div
      className="container py-4"
      style={{
        height: "380px",
        color: "rgba(75, 75, 75, 1)",
        width: "1100px",
        borderRadius: "20px",
        margin: "10px auto",
      }}
    >
      <h1>All-list</h1>
      
      <ul className="d-flex flex-wrap gap-3">
        {output.map((item, index) => (
          <li 
            key={index} 
            style={{ width: "200px", height: "130px" }} 
            // className="border rounded p-2"
          >
            Name : {item.name} <br /> 
            To Day Work : {item.description} <br/>

            <Button
              className="m-2"
              onClick={() => {
                const updatedList = output.filter((_, i) => i !== index);
                setOutput(updatedList);
              }}
            >
              Delete
            </Button>

           <Button
  onClick={() => {
    const updated = output.map((item, i) =>
      i === index ? { ...item, isEditing: true } : item
    );

    setOutput(updated);
  }}
>
  Edit
</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alllist;
