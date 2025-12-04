import React from 'react'

const Car = (props) => {
  return (
    <div className='px-4 py-3'>
    <div className='condainer px-3 py-3 text-white'
    style={{ backgroundColor: "rgba(218, 229, 245, 1)" }}
    >
        <div className='py-3 container text-white gap-3 px-3'
        style={{ backgroundColor: "rgba(202, 202, 202, 1)" }}
        >
    <h3>Name : {props.name}</h3>
    <h3>Model : {props.model}</h3>
    <h3>Price : {props.price}</h3>
</div>

    </div>
     </div>
  )
}

export default Car