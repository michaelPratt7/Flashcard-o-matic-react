import React from "react";
import {Link} from "react-router-dom";

function CreateDeckBread({deck}) {
    return (
<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to= "/" className="btn btn-link" >Home</Link>
      </li>
      <li className="breadcrumb-item">
        <p>Create Deck</p>
      </li>
    </ol>
  </nav>
)}

export default CreateDeckBread;