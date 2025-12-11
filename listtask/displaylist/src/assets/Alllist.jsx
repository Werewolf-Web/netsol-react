import React from 'react'

const Alllist = ({ output }) => {
    return (

        <div
            className="container py-4"
            style={{
                height: "380px",
                color: "rgba(109, 109, 109, 1)",
                width: "1100px",
                borderRadius: "20px",
                margin: "10px auto",
                backgroundColor: "rgba(255, 248, 232, 1)"
            }}
        >

            <h1>All-list</h1>
            <ul>
                {output.map((item, index) => (
                    <li key={index}>
                       name : {item.name} <br /> To Day Work :  {item.description}
                    </li>

                ))}

            </ul>
        </div>

    )
}

export default Alllist