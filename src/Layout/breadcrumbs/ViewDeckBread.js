import React from "react";
import {Link} from "react-router-dom";

function ViewDeckBread({deck}) {
    return (
<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to= "/" className="btn btn-link" >Home</Link>
      </li>
      <li className="breadcrumb-item">
        <p>{deck.name}</p>
    </li>
    </ol>
  </nav>
)}

export default ViewDeckBread;