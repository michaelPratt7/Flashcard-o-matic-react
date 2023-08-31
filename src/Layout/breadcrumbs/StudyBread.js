import React from "react";
import {Link} from "react-router-dom";

function StudyBread({deck}) {
    return (
<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to= "/" className="btn btn-link" >Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to= {`/decks/${deck.id}`} className="btn btn-link" >{deck.name}</Link>
    </li>
      <li className="breadcrumb-item">
        <p>Study</p>
      </li>
    </ol>
  </nav>
)}

export default StudyBread;