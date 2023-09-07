import React from "react";
import {Link} from "react-router-dom";

function AddCardBread({deck}) {
    return (
<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to= "/" className="btn btn-link" >Home</Link>
      </li>
      <li className="breadcrumb-item">
        <p>{deck.name}</p>
    </li>
      <li className="breadcrumb-item">
        <p>Add Card</p>
      </li>
    </ol>
  </nav>
)}

export default AddCardBread;