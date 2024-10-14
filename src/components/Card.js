import React from "react";

function Card({noteDetails, container, updateList, ...rest}) {
 
    const handleDelete = () => {
      updateList(noteDetails)
    } 
  
    // const {data} = rest
    // const {title, quantity} = noteDetails
    return(
      <div style={{width: '200px', height: '200px', margin: '20px', border: '1px solid black'}}>
        <span>{noteDetails?.title}</span>
        <br /><br />
        <span>{noteDetails?.quantity}</span>
        <br />
        <br />
        <br />
        <button onClick={handleDelete}>Delete</button>
      </div>

    )
}

export default Card