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
            style={{
              width: "230px",
              height: "150px",
              padding: "10px",
              borderRadius: "10px",
              background: "white",
              listStyle: "none",
            }}
          >
            {/* EDIT MODE */}
            {item.isEditing ? (
              <>
                <input
                  type="text"
                  value={item.name}
                  className="form-control mb-2"
                  onChange={(e) => {
                    const updated = [...output];
                    updated[index].name = e.target.value;
                    setOutput(updated);
                  }}
                />

                <input
                  type="text"
                  value={item.description}
                  className="form-control mb-2"
                  onChange={(e) => {
                    const updated = [...output];
                    updated[index].description = e.target.value;
                    setOutput(updated);
                  }}
                />

                <Button
                  size="sm"
                  variant="success"
                  onClick={() => {
                    const updated = output.map((item, i) =>
                      i === index ? { ...item, isEditing: false } : item
                    );
                    setOutput(updated);
                  }}
                >
                  Save
                </Button>
              </>
            ) : (
              /* NORMAL VIEW */
              <>
                <strong>Name:</strong> {item.name} <br />
                <strong>Work:</strong> {item.description} <br />

                <Button
                  size="sm"
                  className="mt-2 me-2"
                  onClick={() => {
                    const updated = output.map((item, i) =>
                      i === index ? { ...item, isEditing: true } : item
                    );
                    setOutput(updated);
                  }}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => {
                    const updatedList = output.filter((_, i) => i !== index);
                    setOutput(updatedList);
                  }}
                >
                  Delete
                </Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alllist;
